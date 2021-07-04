import { ActionCreator } from './action.js';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const.js';
import { mapOffersToClient, mapCommentsToClient } from '../utils.js';
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => mapOffersToClient(data))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
    .catch(() => {showAlert('Не удалось получить данные. Попробуйте обновить страницу'); })
);

const fetchNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({ data }) => mapOffersToClient(data))
    .then((nearby) => dispatch(ActionCreator.nearbyList(nearby)))
);
const fetchComments = (reviewsId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${reviewsId}`)
    .then(({ data }) => mapCommentsToClient(data))
    .then((reviews) => dispatch(ActionCreator.reviewsList(reviews)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .then(() => dispatch(ActionCreator.userEmail(email)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

const newComments = ({ comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENT}/${localStorage.getItem('offerId')}`, { comment, rating })
    .then(() => dispatch(ActionCreator.newComment(comment, rating)))
);

export { fetchOffersList, fetchNearbyList, checkAuth, login, logout, fetchComments, newComments };
