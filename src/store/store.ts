import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './roomsSlice';
import activityReducer from './activitySlice';

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;