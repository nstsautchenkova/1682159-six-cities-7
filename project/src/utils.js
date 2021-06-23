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

export { getRatingInPercents, getOfferById, getDefaultMapIcon, getHoverMapIcon };
