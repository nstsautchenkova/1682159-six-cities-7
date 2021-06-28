import React from 'react';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import Header from '../header/header.jsx';
import OfferList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import сityType from '../city-prop/city-prop.js';
import CitiesList from '../сities-list/сities-list.jsx';
import сitiesType from '../сities-prop/сities-prop.js';
function HomePage(props) {
  const { offers, defaultCity, onOfferHover, selectedOffer, OfferCity } = props;
  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewbox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewbox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewbox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList OfferCity={OfferCity} />
            </section>
          </div>

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <OfferList offers={offers} onOfferHover={onOfferHover} />
              </section>

              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    defaultCity={defaultCity}
                    offers={offers}
                    selectedOffer={selectedOffer}
                  />
                </section>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}

HomePage.propTypes = {
  offers: offerType.isRequired,
  defaultCity: PropTypes.exact(сityType).isRequired,
  onOfferHover: PropTypes.func.isRequired,
  selectedOffer: PropTypes.node.isRequired,
  OfferCity: PropTypes.exact(сitiesType).isRequired,
};

export default HomePage;
