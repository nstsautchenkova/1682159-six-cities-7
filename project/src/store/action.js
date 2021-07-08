import {createAction} from '@reduxjs/toolkit';

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
  REVIEW_LIST: 'data/reviewsList',
  NEW_COMMENTS: 'data/newComments',
  COMMENT_ALERT: 'commemt/commentAlert',
};

const commentsAlert = createAction(ActionType.COMMENT_ALERT, (alert) => ({
  payload: alert,
}));
const selectCity = createAction(ActionType.SELECT_CITY, (activeCity) => ({
  payload: activeCity,
}));
const selectListRent = createAction(ActionType.SELECT_LIST_RENT, (activeCity) => ({
  payload: activeCity,
}));
const defaultCityMap = createAction(ActionType.DEFAULT_CITY_MAP, (activeCity) => ({
  payload: activeCity,
}));
const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));
const nearbyList = createAction(ActionType.NEARBY_LIST, (nearby) => ({
  payload: nearby,
}));
const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));
const userLogout = createAction(ActionType.LOGOUT);
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));
const userEmail = createAction(ActionType.USER_EMAIL, (login) => ({
  payload: login,
}));
const reviewsList = createAction(ActionType.REVIEW_LIST, (reviews) => ({
  payload: reviews,
}));
const comments = createAction(ActionType.NEW_COMMENTS, (reviews) => ({
  payload: reviews,
}));

export { ActionType, commentsAlert, selectCity, selectListRent, defaultCityMap, loadOffers, nearbyList, requireAuthorization, userLogout, redirectToRoute, userEmail, reviewsList, comments };
