import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import offerType from '../offers-prop/offers-prop.js';
import { SortType } from '../../const.js';
import Card from '../card/card.jsx';
import getSortedOffers from './helpers.js';
function OfferList(props) {
  const { onOfferHover, activeCity, listOffers } = props;

  const [isOpen, setOpen] = useState(false);
  const placesOptionsOpen = () => {
    setOpen(!isOpen);
  };

  const [isPlacesOptionActive, setPlacesOptionActive] = useState(0);
  const [placesFilter, setPlacesFilter] = useState({
    placesOptionsTitle: SortType.POPULAR,
  });
  const { placesOptionsTitle } = placesFilter;
  const createPlacesOption = Object.values(SortType).map((value, index) => (
    <li
      key={index.toString()}
      tabIndex="0"
      onClick={() => {
        setPlacesOptionActive(index);
        setPlacesFilter((prevValue) => ({
          ...prevValue,
          placesOptionsTitle: value,
        }));
        placesOptionsOpen();
      }}
      className={isPlacesOptionActive === index ? 'places__option places__option--active' : 'places__option'}
    >
      {value}
    </li>
  ));

  const sortedOffers = getSortedOffers(listOffers, placesOptionsTitle);
  return (
    <>
      <b className="places__found">{listOffers.length} places to stay in {activeCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={placesOptionsOpen}>
          {placesOptionsTitle}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
          {createPlacesOption}
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) =>
          <Card offers={offer} id={offer.id} key={offer.id} onOfferHover={onOfferHover} />,
        )}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  activeCity: state.defaultCity,
  listOffers: state.listOffers,
  offers: state.offers,
});
OfferList.propTypes = {
  onOfferHover: PropTypes.func.isRequired,
  activeCity: PropTypes.node.isRequired,
  listOffers: offerType.isRequired,
};

export { OfferList };
export default connect(mapStateToProps)(OfferList);
