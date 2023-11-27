import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3000/books";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
  },
  reducers: {
    getData(state, action) {
      state.data = [
        ...state.data,
        {
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
        },
      ];
      console.log(state.data);
    },
    deleteData(state, action) {
      let afterDeleting = state.data.filter(
        (book) => book.id !== action.payload
      );
      state.data = afterDeleting;
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const { deleteData, getData } = bookSlice.actions;
