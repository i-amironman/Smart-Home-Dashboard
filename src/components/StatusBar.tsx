import { Zap, Home, Activity } from "lucide-react";

interface StatusBarProps {
  totalEnergyUsage: number;
  activeDevices: number;
  totalRooms: number;
}

export const StatusBar = ({ totalEnergyUsage, activeDevices, totalRooms }: StatusBarProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="glass-card p-4 flex items-center space-x-3">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Energy Usage</p>
          <p className="text-xl font-semibold">{totalEnergyUsage} kWh</p>
        </div>
      </div>

      <div className="glass-card p-4 flex items-center space-x-3">
        <div className="p-2 bg-success/20 rounded-lg">
          <Activity className="h-5 w-5 text-success" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Active Devices</p>
          <p className="text-xl font-semibold">{activeDevices}</p>
        </div>
      </div>

      <div className="glass-card p-4 flex items-center space-x-3">
        <div className="p-2 bg-accent/20 rounded-lg">
          <Home className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Connected Rooms</p>
          <p className="text-xl font-semibold">{totalRooms}</p>
        </div>
      </div>
    </div>
  );
};