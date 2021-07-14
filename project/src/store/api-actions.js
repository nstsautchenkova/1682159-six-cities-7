import { loadOffers, redirectToRoute, nearbyList, requireAuthorization, userEmail, userLogout, reviewsList, comments, favoriteHotel } from './action.js';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const.js';
import { mapOffersToClient, mapCommentsToClient, mapFavoriteToClient } from '../utils.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => mapOffersToClient(data))
    .then((offers) => dispatch(loadOffers(offers)))
    .catch(() => { dispatch(redirectToRoute(AppRoute.MAIN_EMPTY)); })
);

const fetchNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({ data }) => mapOffersToClient(data))
    .then((nearby) => dispatch(nearbyList(nearby)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(userEmail(email)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
);
const fetchComments = (reviewsId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${reviewsId}`)
    .then(({ data }) => mapCommentsToClient(data))
    .then((reviews) => dispatch(reviewsList(reviews)))
);
const newComments = (offerId, { comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, { comment, rating })
    .then(({ data }) => mapCommentsToClient(data))
    .then((reviews) => dispatch(comments(reviews)))
);
const fetchFavorite = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${hotelId}/${status}`)
    .then(({ data }) => dispatch(favoriteHotel(mapFavoriteToClient(data))))
    //.then(() => dispatch(loadOffers(mapOffersToClient(offerF))))
);

export { fetchOffersList, fetchNearbyList, checkAuth, login, logout, fetchComments, newComments, fetchFavorite };
