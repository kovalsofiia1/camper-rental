import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFavoriteIds = (state) => state.campers.favorites;

export const selectFavorites = createSelector(
    [selectCampers, selectFavoriteIds],
    (campers, ids ) => {
    return campers.filter((camper) => { return ids.includes(camper._id) });
})
