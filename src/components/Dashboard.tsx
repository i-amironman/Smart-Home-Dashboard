import { ThemeToggle } from "./ThemeToggle";
import { RoomCard } from "./RoomCard";
import { EnergyChart } from "./EnergyChart";
import { QuickActions } from "./QuickActions";
import { StatusBar } from "./StatusBar";
import { useAppSelector } from "@/hooks/useAppDispatch";

export const Dashboard = () => {
  const rooms = useAppSelector(state => state.rooms.rooms);
  const activities = useAppSelector(state => state.activity.activities);

  const totalEnergyUsage = rooms.reduce((total, room) => total + room.energyUsage, 0);
  const activeDevices = rooms.reduce((total, room) => {
    const activeCount = Object.values(room.devices).filter(device => 
      typeof device === 'boolean' && device
    ).length;
    return total + activeCount;
  }, 0);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Home
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's your home overview
            </p>
          </div>
          <ThemeToggle />
        </header>

        {/* Status Bar */}
        <StatusBar 
          totalEnergyUsage={totalEnergyUsage}
          activeDevices={activeDevices}
          totalRooms={rooms.length}
        />

        {/* Quick Actions */}
        <QuickActions />

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}
        </div>

        {/* Energy Usage Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EnergyChart rooms={rooms} />
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xl font-semibold">Recent Activity</h3>
            <div className="space-y-3">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm">{activity.message}</span>
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};