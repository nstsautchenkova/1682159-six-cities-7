import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action.js';
import PropTypes from 'prop-types';
import сitiesType from '../сities-prop/сities-prop.js';
function CitiesList(props) {
  const { OfferCity, onSelectCity, activeCity } = props;
  return (
    <ul className="locations__list tabs__list">
      {Object.values(OfferCity).map((city) => (
        <li className="locations__item" key={city} onClick={onSelectCity}>
          <a
            className={activeCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  activeCity: state.defaultCity,
  listOffers:state.listOffers,
});
const mapDispatchToProps = (dispatch) => ({
  onSelectCity(evt) {
    const activeCity = evt.target.textContent;
    dispatch(ActionCreator.selectCity(activeCity));
    dispatch(ActionCreator.selectListRent(activeCity));
  },
});

CitiesList.propTypes = {
  OfferCity: PropTypes.exact(сitiesType).isRequired,
  onSelectCity: PropTypes.func.isRequired,
  activeCity: PropTypes.node.isRequired,
};

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

