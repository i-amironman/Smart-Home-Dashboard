import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivityItem {
  id: string;
  message: string;
  timestamp: string;
}

interface ActivityState {
  activities: ActivityItem[];
}

const initialState: ActivityState = {
  activities: [
    {
      id: '1',
      message: 'Living Room AC turned on',
      timestamp: '2 min ago'
    },
    {
      id: '2', 
      message: 'Kitchen lights turned on',
      timestamp: '5 min ago'
    },
    {
      id: '3',
      message: 'Bedroom fan turned on', 
      timestamp: '12 min ago'
    }
  ]
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<string>) => {
      const newActivity: ActivityItem = {
        id: Date.now().toString(),
        message: action.payload,
        timestamp: 'Just now'
      };
      
      // Update previous activities timestamps
      state.activities = state.activities.map((activity, index) => ({
        ...activity,
        timestamp: index === 0 ? '2 min ago' : index === 1 ? '5 min ago' : '12 min ago'
      }));
      
      // Add new activity at the beginning
      state.activities.unshift(newActivity);
      
      // Keep only last 5 activities
      if (state.activities.length > 5) {
        state.activities = state.activities.slice(0, 5);
      }
    }
  }
});

export const { addActivity } = activitySlice.actions;
export default activitySlice.reducer;
