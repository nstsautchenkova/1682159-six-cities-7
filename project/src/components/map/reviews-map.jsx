import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import cityType from '../city-prop/city-prop.js';
import pin from './pin.svg';
import { OFFER_COUT } from '../../const.js';

function MapReviews(props) {
  const { defaultCity, offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

  const defaultIcon = leaflet.icon({
    iconUrl: pin,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
  });
  const reviewsOffersMap = offers.slice(0, OFFER_COUT);
  useEffect(() => {
    if (map) {
      reviewsOffersMap.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultIcon,
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
