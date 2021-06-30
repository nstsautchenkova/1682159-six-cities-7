const ActionType = {
  SELECT_CITY: 'citiesList/selectCity',
  SELECT_LIST_RENT: 'citiesList/selectListRent',
  DEFAULT_CITY_MAP: 'map/defaultCityMap',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  NEARBY_LIST: 'data/nearbyList',
};

const ActionCreator = {
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  nearbyList: (nearby) => ({
    type: ActionType.NEARBY_LIST,
    payload: nearby,
  }),
};
export { ActionType, ActionCreator };
