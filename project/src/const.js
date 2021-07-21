const REVIEWS_COUT = 10;
const OFFER_COUT = 3;
const OFFER_IMG_COUT = 6;

const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  FAVORITES: '/favorites',
  OFFER_$ID: '/offer/:id',
  OFFER: '/offer',
  MAIN_EMPTY: '/empty',
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
const OfferCity = {
  PARIS: {
    name: 'Paris',
    location: {
      lat: 48.864716,
      lng: 2.349014,
      zoom: 12,
    },
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      lat: 50.935173,
      lng: 6.953101,
      zoom: 12,
    },
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      lat: 50.85045,
      lng: 4.34878,
      zoom: 16,
    },
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      lat: 52.38333,
      lng: 4.9,
      zoom: 12,
    },
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      lat: 53.551086,
      lng: 9.993682,
      zoom: 12,
    },
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      lat: 51.233334,
      lng: 6.783333,
      zoom: 12,
    },
  },
};
const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};
const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
};
const CommentSetting = {
  LENGHT_MIN: 50,
  LENGHT_MAX: 300,
  RATING_MIN: 0,
};
const CustomHttpHeader = {
  X_TOKEN: 'x-token',
};

const StorageKey = {
  TOKEN: 'token',
};

export { AppRoute, SortType, RatingSetting, REVIEWS_COUT, OFFER_COUT, OfferCity, AuthorizationStatus, APIRoute, CommentSetting, OFFER_IMG_COUT, CustomHttpHeader, StorageKey };
