import React, { useState } from 'react';
import offerType from '../offers-prop/offers-prop.js';
import { SortType } from '../../const.js';
import Card from '../card/card.jsx';
import getSortedOffers from './helpers.js';
function OfferList(props) {
  const { offers } = props;

  const [isOpen, setOpen] = useState(false);
  const placesOptionsOpen = () => {
    setOpen(!isOpen);
  };

  const [isPlacesOptionActive, setPlacesOptionActive] = useState(0);
  const [placesFilter, setPlacesFilter] = useState({
    placesOptions: [
      SortType.POPULAR,
      SortType.TO_HIGHT,
      SortType.TO_LOW,
      SortType.TOP_RATE,
    ],
    filterValue: SortType.POPULAR,
  });
  const { placesOptions, filterValue } = placesFilter;

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

  const sortedOffers = getSortedOffers(offers, filterValue);

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
        {sortedOffers.map((offer) => <Card offers={offer} id={offer.id} key={offer.id} />)}
      </div>
    </>
  );
}
OfferList.propTypes = {
  offers: offerType,
};
export default OfferList;
