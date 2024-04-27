import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IRoom = {
  name: string;
};
type initialState = {
  seatList: IRoom[];
};

const initialState: initialState = {
  seatList: [],
};

export const room = createSlice({
  name: "room",
  initialState,
  reducers: {
    toggleSeat: (state, action) => {
      const seatIndex = state.seatList.findIndex(
        (seat) => seat.name === action.payload
      );
      if (seatIndex !== -1) {
        state.seatList.splice(seatIndex, 1);
      } else {
        const newRoom: IRoom = {
          name: action.payload,
        };
        state.seatList = [...state.seatList, newRoom];
      }
    },
  },
});

export const { toggleSeat } = room.actions;
export default room.reducer;
