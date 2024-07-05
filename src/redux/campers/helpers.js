export const updateFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getInitialFavorites= () => localStorage.getItem('favorites');