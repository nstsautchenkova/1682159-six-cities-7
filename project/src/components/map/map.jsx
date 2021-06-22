import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import cityType from '../city-prop/city-prop.js';
import pin from './pin.svg';
import pinActive from './pin-active.svg';

function Map(props) {
  const { defaultCity, offers, selectedOffer } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

  const defaultIcon = leaflet.icon({
    iconUrl: pin,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
  });

  const hoverIcon = leaflet.icon({
    iconUrl: pinActive,
    iconSize: [28, 39],
    iconAnchor: [14, 39],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer && selectedOffer.id === offer.id)
              ? hoverIcon
              : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

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
Map.propTypes = {
  offers: offerType.isRequired,
  defaultCity: PropTypes.exact(cityType).isRequired,
  selectedOffer: PropTypes.node.isRequired,
};

export default Map;
