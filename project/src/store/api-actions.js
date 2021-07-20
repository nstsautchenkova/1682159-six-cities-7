import { loadOffers, redirectToRoute, nearbyList, requireAuthorization, userLogout, reviewsList, comments, favoriteHotel } from './action.js';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const.js';
import { mapOffersToClient, mapCommentsToClient, mapFavoriteToClient } from '../utils.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => dispatch(loadOffers(mapOffersToClient(data))))
    .catch(() => { dispatch(redirectToRoute(AppRoute.MAIN_EMPTY)); })
);

const fetchNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
    .then(({ data }) => dispatch(nearbyList(mapOffersToClient(data))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(() => localStorage.setItem('email', email))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(userLogout()))
);
const fetchComments = (reviewsId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${reviewsId}`)
    .then(({ data }) => dispatch(reviewsList(mapCommentsToClient(data))))
);
const newComments = (offerId, { comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerId}`, { comment, rating })
    .then(({ data }) => dispatch(comments(mapCommentsToClient(data))))
);
const fetchFavorite = (offer) => (dispatch, _getState, api) => {
  const status = offer.isFavorite ? 0 : 1;
  return api.post(`${APIRoute.FAVORITE}/${offer.id}/${status}`)
    .then(({ data }) => dispatch(favoriteHotel(mapFavoriteToClient(data))));
};

export { fetchOffersList, fetchNearbyList, checkAuth, login, logout, fetchComments, newComments, fetchFavorite };
