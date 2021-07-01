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
  hostName: offer.host.name,
  hostIsPro: offer.host.is_pro,
  description: offer.description,
});
const mapOffersToClient = (offers) => offers.map((it) => mapOfferToClient(it));

export { getRatingInPercents, getOfferById, getDefaultMapIcon, getHoverMapIcon, isCheckedAuth, mapOffersToClient };
