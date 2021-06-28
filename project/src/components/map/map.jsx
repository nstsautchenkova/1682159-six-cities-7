import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map.js';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import defaultCityType from '../default-city-prop/default-city-prop.js';
import { getDefaultMapIcon, getHoverMapIcon } from '../../utils.js';
import { connect } from 'react-redux';
function Map(props) {
  const { defaultCity, selectedOffer, listOffers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

  const renderMarker = (offer) => {
    const markerLayer = leaflet.layerGroup().addTo(map);
    markerLayer.clearLayers();
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
  defaultCity: PropTypes.exact(defaultCityType).isRequired,
  selectedOffer: PropTypes.node.isRequired,
  listOffers: offerType.isRequired,
};

export { Map };
export default connect(mapStateToProps, null)(Map);
