const hasFavorit = (favoritList) => favoritList.find((it) => it.isFavorite === true);
const getFavorits = (offers) => {
  const offersFavoritList = [];
  offers.map((it) => {
    it.isFavorite && offersFavoritList.push(it);
  });
  return offersFavoritList;
};
const uniqueValue = (arr) => Array.from(new Set(arr));
const favoritesOffersFilter = (offer, name) => offer.city.name === name;
export { hasFavorit, getFavorits, uniqueValue, favoritesOffersFilter };
