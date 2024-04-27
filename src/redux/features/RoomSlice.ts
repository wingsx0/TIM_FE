import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IRoom = {
  name: string;
};
type ITabs = {
  id: number;
  isActive: boolean;
  name: string;
};

type initialState = {
  seatList: IRoom[];
  tabs: ITabs[];
};

const initialState: initialState = {
  seatList: [],
  tabs: [
    {
      id: 1,
      isActive: true,
      name: "Chọn ghế",
    },
    {
      id: 2,
      isActive: false,
      name: "Thanh toán",
    },
  ],
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
    setIsActivePay: (state, action: PayloadAction<boolean>) => {
      if (state.tabs.length >= 2) {
        state.tabs[1].isActive = action.payload;
      }
    },
  },
});

export const { toggleSeat, setIsActivePay } = room.actions;
export default room.reducer;
