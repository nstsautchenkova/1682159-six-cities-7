import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import cityType from '../city-prop/city-prop.js';
import { OFFER_COUT } from '../../const.js';
import { getDefaultMapIcon } from '../../utils.js';

function MapReviews(props) {
  const { defaultCity, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

  const reviewsOffersMap = offers.slice(0, OFFER_COUT);

  useEffect(() => {
    if (map) {
      reviewsOffersMap.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: getDefaultMapIcon(leaflet),
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <>
      <div className={map}></div>
      <div
        id="map"
        style={{ height: '100%' }}
        ref={mapRef}
      >
      </div>
    </>
  );
}
MapReviews.propTypes = {
  offers: offerType.isRequired,
  defaultCity: PropTypes.exact(cityType).isRequired,
};

export default MapReviews;
