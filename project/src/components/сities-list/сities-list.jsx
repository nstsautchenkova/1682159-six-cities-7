import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action.js';
import PropTypes from 'prop-types';
import { OfferCity } from '../../const.js';
function CitiesList(props) {
  const { onSelectCity, activeCity } = props;
  return (
    <ul className="locations__list tabs__list">
      {Object.values(OfferCity).map((city) => (
        <li className="locations__item" key={city.name} onClick={onSelectCity}>
          <a
            className={activeCity === city.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  activeCity: state.defaultCity,
  listOffers: state.listOffers,
  defaultCityMap: state.defaultCityMap,
});
const mapDispatchToProps = (dispatch) => ({
  onSelectCity(evt) {
    const activeCity = evt.target.textContent;
    dispatch(ActionCreator.selectCity(activeCity));
    dispatch(ActionCreator.selectListRent(activeCity));
    dispatch(ActionCreator.defaultCityMap(activeCity));
  },
});

CitiesList.propTypes = {
  onSelectCity: PropTypes.func.isRequired,
  activeCity: PropTypes.node.isRequired,
};

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

