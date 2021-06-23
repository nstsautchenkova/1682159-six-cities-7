const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  OFFER_$ID: '/offer/:id',
  OFFER: '/offer',
};
const RatingSetting = {
  MAX_PERCENTS: 100,
  MAX_OFFER_RATING: 5,
};
const SortType = {
  POPULAR: 'Popular',
  TO_HIGHT: 'Price: low to high',
  TO_LOW: 'Price: high to low',
  TOP_RATE: 'Top rated first',
};
const REVIEWS_COUT = 10;
const OFFER_COUT = 3;
export { AppRoute, SortType, RatingSetting, REVIEWS_COUT, OFFER_COUT };
