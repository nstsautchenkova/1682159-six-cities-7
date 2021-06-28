import React from 'react';
import PropTypes from 'prop-types';
import сitiesType from '../сities-prop/сities-prop.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action.js';
function CitiesList(props) {
  const { сities, onSelectCity, activeCity } = props;
  return (
    <ul className="locations__list tabs__list">
      {Object.values(сities).map((сityItem) => (
        <li className="locations__item" key={сityItem.name} onClick={onSelectCity}>
          <a
            className={activeCity === сityItem.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            href="#"
          >
            <span>{сityItem.name}</span>
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
  сities: PropTypes.exact(сitiesType).isRequired,
  onSelectCity: PropTypes.func.isRequired,
  activeCity: PropTypes.node.isRequired,
};

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

