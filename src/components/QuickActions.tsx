import { Lightbulb, Power, Shield, Thermometer, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { toggleAllLights, activatePowerSave, lockAllDoors, setGlobalTemperature } from "@/store/roomsSlice";
import { addActivity } from "@/store/activitySlice";

export const QuickActions = () => {
  const dispatch = useAppDispatch();
  const globalTemperature = useAppSelector(state => state.rooms.globalTemperature);
  const rooms = useAppSelector(state => state.rooms.rooms);

  const handleAllLights = () => {
    const allLightsOn = rooms.every(room => room.devices.lights);
    dispatch(toggleAllLights());
    dispatch(addActivity(`All lights turned ${allLightsOn ? 'off' : 'on'}`));
  };

  const handlePowerSave = () => {
    dispatch(activatePowerSave());
    dispatch(addActivity('Power save mode activated - all electrical devices turned off'));
  };

  const handleSecurity = () => {
    const allDoorsLocked = rooms.every(room => room.devices.door);
    dispatch(lockAllDoors());
    dispatch(addActivity(`All doors ${allDoorsLocked ? 'unlocked' : 'locked'}`));
  };

  const handleTemperatureChange = (increment: boolean) => {
    const newTemp = increment ? globalTemperature + 1 : globalTemperature - 1;
    if (newTemp >= 16 && newTemp <= 30) {
      dispatch(setGlobalTemperature(newTemp));
      dispatch(addActivity(`Global temperature set to ${newTemp}°C`));
    }
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant="outline"
          className="glass-card h-20 flex-col space-y-2 border-white/20 hover:bg-white/10"
          onClick={handleAllLights}
        >
          <Lightbulb className="h-6 w-6" />
          <span className="text-sm">All Lights</span>
        </Button>

        <Button
          variant="outline"
          className="glass-card h-20 flex-col space-y-2 border-white/20 hover:bg-white/10"
          onClick={handlePowerSave}
        >
          <Power className="h-6 w-6" />
          <span className="text-sm">Power Save</span>
        </Button>

        <Button
          variant="outline"
          className="glass-card h-20 flex-col space-y-2 border-white/20 hover:bg-white/10"
          onClick={handleSecurity}
        >
          <Shield className="h-6 w-6" />
          <span className="text-sm">Security</span>
        </Button>

        <div className="glass-card border border-white/20 p-3 h-20 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-1">
            <Thermometer className="h-4 w-4" />
            <span className="text-xs">Climate</span>
          </div>
          <div className="flex items-center justify-between">
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 hover:bg-white/10"
              onClick={() => handleTemperatureChange(false)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-medium">{globalTemperature}°C</span>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 hover:bg-white/10"
              onClick={() => handleTemperatureChange(true)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};