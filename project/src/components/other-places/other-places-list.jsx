import React from 'react';
import offerType from '../offers-prop/offers-prop.js';
import OtherPlacesCard from '../other-places/other-places-card.jsx';
import { OFFER_COUT } from '../../const.js';

function OtherPlaces(props) {
  const { offers } = props;
  const otherPlacesOffers = offers.slice(0, OFFER_COUT);
  return (
    <div className="near-places__list places__list">
      {otherPlacesOffers.map((offer) =>
        <OtherPlacesCard key={offer.id} offers={offer} />,
      )}
    </div>
  );
}
OtherPlaces.propTypes = {
  offers: offerType.isRequired,
};
export default OtherPlaces;
