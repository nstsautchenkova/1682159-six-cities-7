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
  host: {
    id: offer.host.id,
    name: offer.host.name,
    isPro: offer.host.is_pro,
    avatarUrl: offer.host.avatar_url,
  },
  description: offer.description,
  city: {
    name: offer.city.name,
    location: offer.city.location,
    latitude: offer.city.location.latitude,
    longitude: offer.city.location.longitude,
    zoom: offer.city.location.zoom,
  },
  location: {
    location: offer.location,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
});
const mapOffersToClient = (offers) => offers.map((it) => mapOfferToClient(it));

const mapCommentToClient = (review) => ({
  id: review.id,
  user: {
    id: review.user.id,
    isPro: review.user.is_pro,
    name: review.user.name,
    avatarUrl: review.user.avatar_url,
  },
  rating: review.rating,
  comment: review.comment,
  date: review.date,
});
const mapCommentsToClient = (reviews) => reviews.map((it) => mapCommentToClient(it));

const getOffersByCity = (activeCity, rezultOffers) => rezultOffers.filter((offer) => activeCity === offer.city.name);
const getMapByCity = (activeCity, rezultOffers) => {
  const markerMap = Object.values(rezultOffers).filter((offer) => activeCity === offer.name).reduce((item) => item);
  return markerMap.location;
};


export { getRatingInPercents, getOfferById, getDefaultMapIcon, getHoverMapIcon, isCheckedAuth, mapOffersToClient, mapCommentsToClient, getOffersByCity, getMapByCity };
