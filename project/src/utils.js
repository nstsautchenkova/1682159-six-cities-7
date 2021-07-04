import { RatingSetting } from '../src/const.js';
import pin from '../src/components/map/pin.svg';
import pinActive from '../src/components/map/pin-active.svg';

const getRatingInPercents = (rating) => {
  const offerRatingInPercents = (Math.round(rating) / RatingSetting.MAX_OFFER_RATING) * RatingSetting.MAX_PERCENTS;
  return offerRatingInPercents;
};
const getOfferById = (offers, offerId) => {
  const currentOffer = offers.find((offer) =>
    offer.id === offerId,
  );
  return currentOffer;
};

const getDefaultMapIcon = (leaflet) => {
  const defaultMapIcon = leaflet.icon({
    iconUrl: pin,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
  });
  return defaultMapIcon;
};
const getHoverMapIcon = (leaflet) => {
  const hoverMapIcon = leaflet.icon({
    iconUrl: pinActive,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
  });
  return hoverMapIcon;
};
const isCheckedAuth = (status, authorizationStatus) => status === authorizationStatus.UNKNOWN;

const mapOfferToClient = (offer) => ({
  id: offer.id,
  previewImage: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
  bedrooms: offer.bedrooms,
  maxAdults: offer.max_adults,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  images: offer.images,
  goods: offer.goods,
  hostAvatarUrl: offer.host.avatar_url,
  host: offer.host,
  hostId: offer.host.id,
  hostName: offer.host.name,
  hostIsPro: offer.host.is_pro,
  description: offer.description,
  city: offer.city,
  cityName: offer.city.name,
  cityLocation: offer.city.location,
  cityLatitude: offer.city.location.latitude,
  cityLongitude: offer.city.location.longitude,
  cityZoom: offer.city.location.zoom,
  location: offer.location,
  latitude: offer.location.latitude,
  longitude: offer.location.longitude,
  zoom: offer.location.zoom,
});
const mapOffersToClient = (offers) => offers.map((it) => mapOfferToClient(it));

const mapCommentToClient = (review) => ({
  id: review.id,
  userId: review.user.id,
  userIsPro: review.user.is_pro,
  userName: review.user.name,
  userAvatarUrl: review.user.avatar_url,
  rating: review.rating,
  comment: review.comment,
  date: review.date,
});
const mapCommentsToClient = (reviews) => reviews.map((it) => mapCommentToClient(it));
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

const commentFormDefault = () => {
  const featureCheckbox = document.querySelectorAll('.form__rating-input');
  featureCheckbox.forEach((element) => element.checked = false);
  document.querySelector('#review').value = '';
  document.querySelector('.reviews__submit').disabled = true;
};

const showSuccess = (success) => {
  success.current.style.display = 'block';
  setTimeout(() => {
    success.current.style.display = 'none';
  }, 3000);
};
const showError = (error) => {
  error.current.style.display = 'block';
  setTimeout(() => {
    error.current.style.display = 'none';
  }, 3000);
};
export { getRatingInPercents, getOfferById, getDefaultMapIcon, getHoverMapIcon, isCheckedAuth, mapOffersToClient, mapCommentsToClient, showAlert, commentFormDefault, showSuccess, showError };
