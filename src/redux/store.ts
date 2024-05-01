import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./features/RoomSlice";
import authReducer from "./features/authSlice";
import searchReducer from "./features/searchSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    roomReducer,
    authReducer,
    searchReducer,
  },
});

export type RoomState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RoomState> = useSelector;
