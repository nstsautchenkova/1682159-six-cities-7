const hasFavorit = (favoritList) => favoritList.find((it) => it.isFavorite === true);
const getFavorits = (offers) => {
  const offersFavoritList = [];
  offers.map((it) => {
    it.isFavorite && offersFavoritList.push(it);
  });
  return offersFavoritList;
};
export  { hasFavorit, getFavorits };
