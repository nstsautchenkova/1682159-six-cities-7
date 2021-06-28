import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import useMap from './use-map.js';
import offerType from '../offers-prop/offers-prop.js';
import сityType from '../city-prop/city-prop.js';
import { getDefaultMapIcon, getHoverMapIcon } from '../../utils.js';

function Map(props) {
  const { defaultCity, selectedOffer, listOffers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);
  const markerLayer = leaflet.layerGroup();

  const renderMarker = (offer) => {
    markerLayer.addTo(map);
    const marker = leaflet.marker(
      {
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      },
      {
        icon: (selectedOffer && selectedOffer.id === offer.id)
          ? getHoverMapIcon(leaflet)
          : getDefaultMapIcon(leaflet),
      },
    );
    marker
      .addTo(markerLayer);
  };

  useEffect(() => {
    if (map) {
      listOffers.forEach((offer) => {
        renderMarker(offer);
      });
    }
    return () => {
      if (map) {
        markerLayer.clearLayers();
      }
    };
  }, [map, listOffers, selectedOffer]);

  return (
    <div
      id="map"
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
const mapStateToProps = (state) => ({
  listOffers: state.listOffers,
});
Map.propTypes = {
  defaultCity: PropTypes.exact(сityType).isRequired,
  selectedOffer: PropTypes.node.isRequired,
  listOffers: offerType.isRequired,
};

export { Map };
export default connect(mapStateToProps, null)(Map);
