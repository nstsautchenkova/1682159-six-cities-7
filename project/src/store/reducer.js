import { ActionType } from './action.js';
import { OfferCity, AuthorizationStatus } from '../const.js';

const getOffersByCity = (activeCity, rezultOffers) => rezultOffers.filter((offer) => activeCity === offer.city.name);

const getMapByCity = (activeCity, rezultOffers) => {
  const markerMap = Object.values(rezultOffers).filter((offer) => activeCity === offer.name).reduce((item) => item);
  return markerMap.location;
};

const initialState = {
  defaultCity: OfferCity.PARIS.name,
  offers: [],
  listOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  defaultCityMap: OfferCity.PARIS.location,
  nearby: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.SELECT_CITY): {
      return {
        ...state,
        defaultCity: action.activeCity,
      };
    }
    case (ActionType.SELECT_LIST_RENT): {
      return {
        ...state,
        listOffers: getOffersByCity(state.defaultCity, state.offers),
      };
    }
    case (ActionType.LOAD_OFFERS): {
      return {
        ...state,
        offers: action.payload,
        listOffers: getOffersByCity(state.defaultCity, action.payload),
        isDataLoaded: true,
      };
    }
    case (ActionType.REQUIRED_AUTHORIZATION): {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case (ActionType.LOGOUT): {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }
    case (ActionType.DEFAULT_CITY_MAP): {
      return {
        ...state,
        defaultCityMap: getMapByCity(action.activeCity, OfferCity),
      };
    }
    case (ActionType.NEARBY_LIST): {
      return {
        ...state,
        nearby: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};


export { reducer };
