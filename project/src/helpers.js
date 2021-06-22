const getOfferById = (offers, offerId) => {
  const currentOffer = offers.find((offer) =>
    offer.id === offerId,
  );
  return currentOffer;
};
export default getOfferById;
