import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather";
import snackbarReducer from "./slices/snackbar";

// Create the Redux store
const store = configureStore({
  reducer: {
    weather: weatherReducer,
    snackbar: snackbarReducer,
    // Add more reducers if you have them
  },
});

// Export the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
