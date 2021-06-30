import React from 'react';
import { connect } from 'react-redux';
import offerType from '../offers-prop/offers-prop.js';
import OtherPlacesCard from '../other-places/other-places-card.jsx';
import { OFFER_COUT } from '../../const.js';

function OtherPlaces(props) {
  const { nearby } = props;
  const otherPlacesOffers = nearby.slice(0, OFFER_COUT);
  return (
    <div className="near-places__list places__list">
      {otherPlacesOffers.map((offer) =>
        <OtherPlacesCard key={offer.id} offers={offer} />,
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  nearby: state.nearby,
});
OtherPlaces.propTypes = {
  //offers: offerType.isRequired,
  nearby: offerType.isRequired,
};
//export default OtherPlaces;
export default connect(mapStateToProps, null)(OtherPlaces);
