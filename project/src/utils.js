import { RatingSetting } from '../src/const.js';

const getRatingInPercents = (rating) => {
  const offerRatingInPercents = (Math.round(rating) / RatingSetting.MAX_OFFER_RATING) * RatingSetting.MAX_PERCENTS;
  return offerRatingInPercents;
};

export { getRatingInPercents };
