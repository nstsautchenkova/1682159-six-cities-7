//import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import сitiesType from '../сities-prop/сities-prop.js';

import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action.js';

function CitiesList(props) {
  const { сities, onSelectCity, activeCity } = props;
  /* const [isActive, setActive] = useState({
    activeName: 'Paris',
  });
  const { activeName } = isActive; */
  return (
    <ul className="locations__list tabs__list" id={typeof(activeCity)}>
      {Object.values(сities).map((сityItem) => (
        <li className="locations__item" key={сityItem.name}>
          <a
            /* onClick={() => {
              setActive();
              setActive((prevName) => ({
                ...prevName,
                activeName: сityItem.name,
              }));
            }} */
            onClick={onSelectCity}
            className={activeCity === сityItem.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            href="#"
          >
            <span>{сityItem.name}<p>{activeCity}</p></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});
const mapDispatchToProps = (dispatch) => ({
  onSelectCity() {
    const activeCity = 'q';
    dispatch(ActionCreator.selectCity(activeCity));
  },
});

CitiesList.propTypes = {
  сities: PropTypes.exact(сitiesType).isRequired,
  onSelectCity: PropTypes.func.isRequired,
  activeCity: PropTypes.exact(сitiesType).isRequired,
};

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

