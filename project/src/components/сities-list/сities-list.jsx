import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity, selectListRent,defaultCityMap } from '../../store/action.js';
import { OfferCity } from '../../const.js';
import { getDefaultCity } from '../../store/process/selectors.js';

function CitiesList() {
  const activeCity = useSelector(getDefaultCity);
  const dispatch = useDispatch();
  const onSelectCity = (evt) => {
    dispatch(selectCity(evt.target.textContent));
    dispatch(selectListRent(evt.target.textContent));
    dispatch(defaultCityMap(evt.target.textContent));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(OfferCity).map((city) => (
        <li className="locations__item" key={city.name}>
          <div
            className={activeCity === city.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            onClick={onSelectCity}
          >
            <span>{city.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;

