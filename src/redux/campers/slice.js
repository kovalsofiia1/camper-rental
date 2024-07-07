import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersPage } from "./operations";
import { getInitialFavorites, updateFavorites } from "./helpers";

const initialFavorites = getInitialFavorites();

const campersSlice = createSlice({
    name: "campers",
    initialState: {
      items: [],
      perPage: 4,
      currentPage: 1,
      filters: {},
      favorites: initialFavorites ? JSON.parse(initialFavorites) : [],
      loading: false,
      error: null,
      moreToLoad: true
  },
  reducers: {
    incrementPage(state) {
      state.currentPage++;
    },
    resetPage(state) {
      state.currentPage = 1;
      state.items = [];
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    resetItems(state) {
      state.items = [];
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addToFavorite(state, action) {
        const camperId  = action.payload;
        state.favorites.push(camperId);
        updateFavorites(state.favorites);
    },
    deleteFromFavorite(state, action) {
        const camperId = action.payload;
        state.favorites = state.favorites.filter(id => id !== camperId);
        updateFavorites(state.favorites);
    }
  },
    extraReducers: builder => {
    builder
      .addCase(fetchCampersPage.pending, (state) => {
        state.loading = true;
        state.moreToLoad = true;
      })
      .addCase(fetchCampersPage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const ids = state.items.map((item) => item._id);
        state.items = [...state.items, ...action.payload.filter((item)=> !ids.includes(item._id))];
        if (action.payload.length < state.perPage) {
          state.moreToLoad = false
        }
      })
      .addCase(fetchCampersPage.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.moreToLoad = false;
      })
  },
})

export const campersReducer = campersSlice.reducer;
export const { deleteFromFavorite, addToFavorite, incrementPage, resetPage, resetItems, setPage, setFilters } = campersSlice.actions;