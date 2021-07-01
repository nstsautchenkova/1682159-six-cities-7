const ActionType = {
  SELECT_CITY: 'citiesList/selectCity',
  SELECT_LIST_RENT: 'citiesList/selectListRent',
  DEFAULT_CITY_MAP: 'map/defaultCityMap',
  LOAD_OFFERS: 'data/loadOffers',
  NEARBY_LIST: 'data/nearbyList',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'game/redirectToRoute',
  USER_EMAIL: 'data/login',
};

const ActionCreator = {
  userEmail: (login) => ({
    type: ActionType.USER_EMAIL,
    payload: login,
  }),
  selectCity: (activeCity) => ({
    type: ActionType.SELECT_CITY,
    activeCity,
  }),
  selectListRent: (activeCity) => ({
    type: ActionType.SELECT_LIST_RENT,
    activeCity: activeCity,
  }),
  defaultCityMap: (activeCity) => ({
    type: ActionType.DEFAULT_CITY_MAP,
    activeCity: activeCity,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  nearbyList: (nearby) => ({
    type: ActionType.NEARBY_LIST,
    payload: nearby,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
export { ActionType, ActionCreator };