const hasFavorit = (favoritList) => favoritList.find((it) => it.isFavorite === true);
const getFavorits = (offers) => {
  const offersFavoritList = [];
  offers.map((it) => {
    it.isFavorite && offersFavoritList.push(it);
  });
  return offersFavoritList;
};
const uniqueValue = (arr) => {
  const result = [];
  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};
export  { hasFavorit, getFavorits, uniqueValue };
