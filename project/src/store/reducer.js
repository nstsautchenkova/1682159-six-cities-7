import {ActionType} from './action';
import {сities} from '../mocks/сities.js';
import offers from '../mocks/offers.js';

const initialState = {
  activeCity: сities.Paris, // city.name
  listOffers: offers, // offers.city.name
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_CITY:
      return {
        ...state,
        activeCity: state.activeCity,
      };
    case ActionType.SELECT_LIST_RENT:
      return {
        ...state,
        listOffers: state.listRent,
      };
    default:
      return state;
  }
};


export {reducer};
