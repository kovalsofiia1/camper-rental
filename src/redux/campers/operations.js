import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6686810d83c983911b02885b.mockapi.io/api";

export const fetchCampersPage = createAsyncThunk("campers/fetchCampersPage", async ({page, limit}, thunkAPI) => {
  try {
        const response = await axios.get(`/adverts?limit=${limit}&page=${page}`);
        console.log(response);
      return response.data;
  } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
  }
});

