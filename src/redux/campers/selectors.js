import { createSelector } from "@reduxjs/toolkit";

export const selectCampersState = (state) => state.campers;
export const selectCampers = (state) => state.campers.items;
export const selectFavoriteIds = (state) => state.campers.favorites;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectPerPage = (state) => state.campers.perPage;
export const selectMoreToLoad = (state) => state.campers.moreToLoad;
 
export const selectFavorites = createSelector(
    [selectCampers, selectFavoriteIds],
    (campers, ids ) => {
    return campers.filter((camper) => { return ids.includes(camper._id) });
})
