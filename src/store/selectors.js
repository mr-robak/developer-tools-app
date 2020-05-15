// src/store/developers/selectors.js
// import userSliceReducer from "./user/reducer";

export function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export const selectDevs = (state) => {
  return state.developers;
};

export const selectRecources = (state) => {
  return state.resources;
};

export const selectDeveloperStatistics = (state) => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter((dev) => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      (dev) => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map((dev) => dev.favorites.length)
    ),
  };
};

export const selectDevelopersWithFavorite = (favoriteId) => {
  return (state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  };
};

export const selectDevelopersFavoritesResources = (developerId) => {
  return (state) => {
    return state.developers
      .find((dev) => dev.id === developerId)
      .favorites.map((favId) =>
        state.resources.find((resource) => resource.id === favId)
      );
  };
};

export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};
