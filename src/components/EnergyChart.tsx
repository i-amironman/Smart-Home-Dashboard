import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

interface EnergyChartProps {
  rooms: RoomData[];
}

export const EnergyChart = ({ rooms }: EnergyChartProps) => {
  const chartData = rooms.map(room => ({
    name: room.name,
    energy: room.energyUsage,
    icon: room.icon
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 border border-white/20">
          <p className="text-sm font-medium">{`${label}: ${payload[0].value} kWh`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-semibold mb-4">Energy Usage by Room</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="energy" 
              fill="url(#energyGradient)"
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};