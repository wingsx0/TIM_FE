import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  keyword: string;
};

const initialState: initialState = {
  keyword: "",
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

export const { setKeyword } = search.actions;
export default search.reducer;
