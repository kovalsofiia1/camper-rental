import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6686810d83c983911b02885b.mockapi.io/api";

export const fetchCampersPage = createAsyncThunk(
  "campers/fetchCampersPage",
  async ({ page, limit, filters={} }, thunkAPI) => {
    try {
      const url = new URL('/adverts', axios.defaults.baseURL);

      // Додаємо параметри пагінації
      url.searchParams.append('limit', limit);
      url.searchParams.append('page', page);

      // Додаємо параметри фільтрів
      if (filters.location) {
        url.searchParams.append('location', filters.location);
      }

      if (filters.type && filters.type!=='all') {
        url.searchParams.append('form', filters.type);
      }

      // Додаємо параметри обладнання як окремі фільтри
      if (filters.equipment) {
        let searchLine = [];
        Object.keys(filters.equipment).forEach((key) => {
          if (filters.equipment[key]) {
            
            searchLine.push(key);
            console.log(key, searchLine);
          }
        });
        if(searchLine) url.searchParams.append('search', searchLine.join(' '));
      }

      const response = await axios.get(url.toString());
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
