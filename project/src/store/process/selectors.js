import { NameSpace } from '../root-reducer';

const getListOffers = (state) => state[NameSpace.PROCESS].listOffers;
const getOffers = (state) => state[NameSpace.PROCESS].offers;
const getDefaultCity = (state) => state[NameSpace.PROCESS].defaultCity;
const getDefaultCityMap = (state) => state[NameSpace.PROCESS].defaultCityMap;
const getIsDataLoaded = (state) => state[NameSpace.PROCESS].isDataLoaded;
const getCommentAlert = (state) => state[NameSpace.PROCESS].commentAlert;
const getFavoriteHotel = (state) => state[NameSpace.PROCESS].favoriteHotel;

export { getListOffers, getOffers, getDefaultCity, getDefaultCityMap, getIsDataLoaded, getCommentAlert, getFavoriteHotel };
