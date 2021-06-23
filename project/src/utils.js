import { RatingSetting } from '../src/const.js';

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

export { getRatingInPercents, getOfferById };
