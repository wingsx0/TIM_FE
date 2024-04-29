import { IUser } from "@/interface/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  isLogin: boolean;
  user: IUser | null;
};

const initialState: initialState = {
  isLogin: false,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    getUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setIsLogin, getUser } = auth.actions;
export default auth.reducer;
