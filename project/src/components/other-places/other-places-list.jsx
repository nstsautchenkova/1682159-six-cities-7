import React from 'react';
import { useSelector } from 'react-redux';
import OtherPlacesCard from '../other-places/other-places-card.jsx';
import { OFFER_COUT } from '../../const.js';
import { getNearby } from '../../store/data/selectors.js';


function OtherPlaces(props) {
  const nearby = useSelector(getNearby);
  const otherPlacesOffers = nearby.slice(0, OFFER_COUT);
  return (
    <div className="near-places__list places__list">
      {otherPlacesOffers.map((offer) =>
        <OtherPlacesCard key={offer.id} offers={offer} />,
      )}
    </div>
  );
}

export default OtherPlaces;
