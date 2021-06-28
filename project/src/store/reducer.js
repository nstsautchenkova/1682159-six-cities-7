import { ActionType } from './action';
import offers from '../mocks/offers.js';
import { OfferCity } from '../const.js';

const getOffersByCity = (activeCity, rezultOffers) => rezultOffers.filter((offer) => offer.city.name === activeCity);

const initialState = {
  defaultCity: OfferCity.PARIS,
  listOffers: getOffersByCity(OfferCity.PARIS, offers),
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
        listOffers: getOffersByCity(action.activeCity, offers),
      };
    }
    default: {
      return state;
    }
  }
};


export { reducer };
