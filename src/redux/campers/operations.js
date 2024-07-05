import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6686810d83c983911b02885b.mockapi.io/api";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
  try {
        const response = await axios.get("/adverts");
        return response.data;
  } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue(e.message);
  }
});

