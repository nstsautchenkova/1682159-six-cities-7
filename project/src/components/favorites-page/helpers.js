const hasFavorite = (favoriteList) => favoriteList.find((it) => it.isFavorite === true);
const getFavorites = (offers) => {
  const offersFavoriteList = [];
  offers.map((it) => it.isFavorite && offersFavoriteList.push(it));
  return offersFavoriteList;
};
const uniqueValue = (arr) => Array.from(new Set(arr));
const favoritesOffersFilter = (offer, name) => offer.city.name === name;
export { hasFavorite, getFavorites, uniqueValue, favoritesOffersFilter };
