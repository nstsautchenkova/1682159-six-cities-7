const hasFavorit = (favoritList) => favoritList.find((it) => it.isFavorite === true);
const getFavorits = (offers) => {
  const offersFavoritList = [];
  offers.map((it) => {
    if (it.isFavorite) {
      offersFavoritList.push(it);
    }
    return offersFavoritList;
  });
  return offersFavoritList;
};
export  { hasFavorit, getFavorits };
