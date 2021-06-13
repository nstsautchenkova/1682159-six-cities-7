import React, { useState } from 'react';
import OfferProp from '../offers-prop/offers-prop.js';
import Card from '../card/card.jsx';

function OfferList(props) {
  const { offers } = props;
  //const offerPriceLowToHigh = offers.map((offer) => offer.price).sort((a, b) => a - b); // От дешёвых к дорогим
  //const offerPriceHighToLow = offers.map((offer) => offer.price).sort((a, b) => b - a); // От дорогих к дешёвым
  //const offerTopRatedFirst = offers.map((offer) => offer.rating).sort((a, b) => b - a); // От высокого рейтинга к низкому

  // Filter open
  const [isOpen, setOpen] = useState(false);
  const placesOptionsOpen = () => {
    setOpen(!isOpen);
  };

  // FILTER options choice
  const [isPlacesOptionActive, setPlacesOptionActive] = useState(0);

  const [isPlacesFilter, setPlacesFilter] = useState({
    placesOptions: [
      'Popular',
      'Price: low to high',
      'Price: high to low',
      'Top rated first',
    ],
    filterValue: 'Popular',
  });
  const { placesOptions, filterValue } = isPlacesFilter;

  const createPlacesOption = placesOptions.map((value, index) => (
    <li
      key={index.toString()}
      tabIndex="0"
      onClick={() => {
        setPlacesOptionActive(index);
        setPlacesFilter((prevValue) => ({
          ...prevValue,
          filterValue: value,
        }));
        placesOptionsOpen();
      }}
      className={isPlacesOptionActive === index ? 'places__option places__option--active' : 'places__option'}
    >
      {value}
    </li>
  ));

  // FILTER

  // Отрисовка карточки
  const renderOffersCards = () => {
    switch (filterValue) {
      case 'Popular': return <Card offers={offers} />;
      case 'Price: low to high': return 'Price: low to high';
      case 'Price: high to low': return 'Price: high to low';
      case 'Top rated first': return 'Top rated first';
      default: return <Card offers={offers} />;
    }
  };

  ///////////////////////////////////////////////////////
  return (
    <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={placesOptionsOpen}>
          {filterValue}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
          {createPlacesOption}
        </ul>
      </form>

      <div className="cities__places-list places__list tabs__content">
        {renderOffersCards()}
      </div>
    </>
  );
}
OfferList.propTypes = {
  offers: OfferProp,
};
export default OfferList;
