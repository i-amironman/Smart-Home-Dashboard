import { useState } from "react";
import { Lightbulb, Fan, Snowflake, DoorOpen, DoorClosed, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateDevice } from "@/store/roomsSlice";
import { addActivity } from "@/store/activitySlice";

interface DeviceState {
  lights: boolean;
  fan: boolean;
  ac: boolean;
  door: boolean;
  temperature: number;
}

interface RoomData {
  id: string;
  name: string;
  icon: string;
  devices: DeviceState;
  energyUsage: number;
}

interface RoomCardProps {
  room: RoomData;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const dispatch = useAppDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDeviceToggle = (device: keyof DeviceState, value: boolean) => {
    dispatch(updateDevice({ roomId: room.id, device, value }));
    
    const deviceNames = {
      lights: 'lights',
      fan: 'fan', 
      ac: 'AC',
      door: 'door'
    };
    
    if (device === 'door') {
      dispatch(addActivity(`${room.name} door ${value ? 'unlocked' : 'locked'}`));
    } else {
      dispatch(addActivity(`${room.name} ${deviceNames[device]} turned ${value ? 'on' : 'off'}`));
    }
  };

  const handleTemperatureChange = (newTemp: number) => {
    if (newTemp >= 16 && newTemp <= 30) {
      dispatch(updateDevice({ roomId: room.id, device: 'temperature', value: newTemp }));
      dispatch(addActivity(`${room.name} temperature set to ${newTemp}°C`));
    }
  };

  const deviceConfig = [
    { 
      key: "lights" as keyof DeviceState, 
      icon: Lightbulb, 
      label: "Lights", 
      color: room.devices.lights ? "text-yellow-400" : "text-muted-foreground" 
    },
    { 
      key: "fan" as keyof DeviceState, 
      icon: Fan, 
      label: "Fan", 
      color: room.devices.fan ? "text-blue-400" : "text-muted-foreground" 
    },
    { 
      key: "ac" as keyof DeviceState, 
      icon: Snowflake, 
      label: "AC", 
      color: room.devices.ac ? "text-cyan-400" : "text-muted-foreground" 
    },
  ];

  return (
    <div className="glass-card p-6 space-y-4 hover:shadow-lg transition-all duration-300">
      {/* Room Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{room.icon}</span>
          <div>
            <h3 className="font-semibold">{room.name}</h3>
            <p className="text-sm text-muted-foreground">{room.energyUsage} kWh</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-muted-foreground"
        >
          {isExpanded ? "Less" : "More"}
        </Button>
      </div>

      {/* Temperature Display */}
      <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
        <Thermometer className="h-4 w-4 text-orange-400" />
        <span className="text-sm">{room.devices.temperature}°C</span>
      </div>

      {/* Device Controls */}
      <div className="space-y-3">
        {deviceConfig.map((device) => (
          <div key={device.key} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <device.icon className={`h-4 w-4 ${device.color}`} />
              <span className="text-sm">{device.label}</span>
            </div>
            <Switch
              checked={room.devices[device.key] as boolean}
              onCheckedChange={(checked) => handleDeviceToggle(device.key, checked)}
            />
          </div>
        ))}

        {/* Door Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {room.devices.door ? (
              <DoorOpen className="h-4 w-4 text-green-400" />
            ) : (
              <DoorClosed className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm">Door</span>
          </div>
          <Switch
            checked={room.devices.door}
            onCheckedChange={(checked) => handleDeviceToggle("door", checked)}
          />
        </div>
      </div>

      {/* Expanded Controls */}
      {isExpanded && (
        <div className="border-t border-white/10 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Temperature</span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleTemperatureChange(Math.max(16, room.devices.temperature - 1))}
                className="h-8 w-8 p-0"
              >
                -
              </Button>
              <span className="text-sm min-w-[3rem] text-center">{room.devices.temperature}°C</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleTemperatureChange(Math.min(30, room.devices.temperature + 1))}
                className="h-8 w-8 p-0"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};