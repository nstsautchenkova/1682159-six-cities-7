import { createReducer } from '@reduxjs/toolkit';
import { selectListRent, loadOffers, selectCity, defaultCityMap, commentsAlert, favoriteHotel, favoriteHotelStatus } from '../action.js';
import { getMapByCity, getOffersByCity } from '../../utils.js';
import { OfferCity } from '../../const.js';

const initialState = {
  listOffers: [],
  offers: [],
  defaultCity: OfferCity.PARIS.name,
  defaultCityMap: OfferCity.PARIS.location,
  isDataLoaded: false,
  commentAlert: '',
  favoriteHotelStatus: { status: 0, hotelId: 0 },
  favoriteHotel: [],
};
const process = createReducer(initialState, (builder) => {
  builder
    .addCase(selectListRent, (state, action) => {
      state.listOffers = getOffersByCity(action.payload, state.offers);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.listOffers = getOffersByCity(state.defaultCity, action.payload);
      state.isDataLoaded = true;
    })
    .addCase(selectCity, (state, action) => {
      state.defaultCity = action.payload;
    })
    .addCase(defaultCityMap, (state, action) => {
      state.defaultCityMap = getMapByCity(action.payload, OfferCity);
    })
    .addCase(commentsAlert, (state, action) => {
      state.commentAlert = action.payload;
    })
    .addCase(favoriteHotelStatus, (state, action) => {
      state.favoriteHotelStatus = action.payload;
    })
    .addCase(favoriteHotel, (state, action) => {
      state.favoriteHotel = state.favoriteHotel.concat(action.payload);
      /* if (Number(state.favoriteHotelStatus.status) === 1) {
        state.favoriteHotel = state.favoriteHotel.concat(action.payload);
      }
      if (Number(state.favoriteHotelStatus.status) === 0) {
      } */
    });
});

export { process };
