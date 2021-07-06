import { ActionType } from './action.js';
import { OfferCity, AuthorizationStatus } from '../const.js';

const getOffersByCity = (activeCity, rezultOffers) => rezultOffers.filter((offer) => activeCity === offer.city.name);

const getMapByCity = (activeCity, rezultOffers) => {
  const markerMap = Object.values(rezultOffers).filter((offer) => activeCity === offer.name).reduce((item) => item);
  return markerMap.location;
};
const initialState = {
  defaultCity: OfferCity.PARIS.name,
  defaultCityMap: OfferCity.PARIS.location,
  listOffers: [],
  offers: [],
  nearby: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  userEmail: '',
  reviews: [],
  comment: [],
  allComment: [],
  commentAlert:'',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMMENT_ALERT: {
      return {
        ...state,
        commentAlert: action.payload,
      };
    }
    case ActionType.SELECT_CITY: {
      return {
        ...state,
        defaultCity: action.activeCity,
      };
    }
    case ActionType.SELECT_LIST_RENT: {
      return {
        ...state,
        listOffers: getOffersByCity(action.activeCity, state.offers),
      };
    }
    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        listOffers: getOffersByCity(state.defaultCity, action.payload),
        isDataLoaded: true,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.LOGOUT: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }
    case ActionType.DEFAULT_CITY_MAP: {
      return {
        ...state,
        defaultCityMap: getMapByCity(action.activeCity, OfferCity),
      };
    }
    case ActionType.NEARBY_LIST: {
      return {
        ...state,
        nearby: action.payload,
      };
    }
    case ActionType.USER_EMAIL: {
      return {
        ...state,
        userEmail: action.payload,
      };
    }
    case ActionType.REVIEW_LIST: {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    case ActionType.NEW_COMMENTS: {
      return {
        ...state,
        comment: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};


export { reducer };
