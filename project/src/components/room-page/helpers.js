const getOfferById = (offers, id) => offers.find((it) => Number(it.id) === Number(id));
export default getOfferById;
