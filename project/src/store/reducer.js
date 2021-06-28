import { ActionType } from './action';
import offers from '../mocks/offers.js';
import { ACTIVE_CITY } from '../const.js';

const getOffers = (activeCity, rezultOffers) => rezultOffers.filter((offer) => offer.city.name === activeCity);

const initialState = {
  defaultCity: ACTIVE_CITY,
  listOffers: getOffers(ACTIVE_CITY, offers),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return {
        ...state,
        defaultCity: action.activeCity,
      };
    case ActionType.SELECT_LIST_RENT:
      return {
        ...state,
        listOffers: getOffers(action.activeCity, offers),
      };
    default:
      return state;
  }
};


export { reducer };
