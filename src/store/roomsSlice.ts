import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DeviceState {
  lights: boolean;
  fan: boolean;
  ac: boolean;
  door: boolean;
  temperature: number;
}

export interface RoomData {
  id: string;
  name: string;
  icon: string;
  devices: DeviceState;
  energyUsage: number;
}

interface RoomsState {
  rooms: RoomData[];
  globalTemperature: number;
}

const initialState: RoomsState = {
  globalTemperature: 22,
  rooms: [
    {
      id: "living-room",
      name: "Living Room",
      icon: "🛋️",
      devices: { lights: true, fan: false, ac: true, door: false, temperature: 22 },
      energyUsage: 45
    },
    {
      id: "bedroom",
      name: "Bedroom",
      icon: "🛏️",
      devices: { lights: false, fan: true, ac: false, door: false, temperature: 20 },
      energyUsage: 28
    },
    {
      id: "kitchen",
      name: "Kitchen",
      icon: "🍳",
      devices: { lights: true, fan: false, ac: false, door: false, temperature: 24 },
      energyUsage: 67
    },
    {
      id: "bathroom",
      name: "Bathroom",
      icon: "🛁",
      devices: { lights: false, fan: true, ac: false, door: true, temperature: 21 },
      energyUsage: 15
    }
  ]
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    updateDevice: (state, action: PayloadAction<{roomId: string, device: keyof DeviceState, value: boolean | number}>) => {
      const { roomId, device, value } = action.payload;
      const room = state.rooms.find(r => r.id === roomId);
      if (room) {
        (room.devices as any)[device] = value;
        // Update energy usage based on device states
        room.energyUsage = calculateEnergyUsage(room.devices);
      }
    },
    toggleAllLights: (state) => {
      const allLightsOn = state.rooms.every(room => room.devices.lights);
      state.rooms.forEach(room => {
        room.devices.lights = !allLightsOn;
        room.energyUsage = calculateEnergyUsage(room.devices);
      });
    },
    activatePowerSave: (state) => {
      state.rooms.forEach(room => {
        room.devices.lights = false;
        room.devices.fan = false;
        room.devices.ac = false;
        room.energyUsage = calculateEnergyUsage(room.devices);
      });
    },
    lockAllDoors: (state) => {
      const allDoorsLocked = state.rooms.every(room => room.devices.door);
      state.rooms.forEach(room => {
        room.devices.door = !allDoorsLocked;
      });
    },
    setGlobalTemperature: (state, action: PayloadAction<number>) => {
      state.globalTemperature = action.payload;
      state.rooms.forEach(room => {
        room.devices.temperature = action.payload;
      });
    }
  }
});

const calculateEnergyUsage = (devices: DeviceState): number => {
  let usage = 0;
  if (devices.lights) usage += 15;
  if (devices.fan) usage += 25;
  if (devices.ac) usage += 45;
  return usage;
};

export const { updateDevice, toggleAllLights, activatePowerSave, lockAllDoors, setGlobalTemperature } = roomsSlice.actions;
export default roomsSlice.reducer;