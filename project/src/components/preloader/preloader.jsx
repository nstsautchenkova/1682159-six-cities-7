import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="155" />
      <div className="loader">
        <div className="loader__bar"></div>
      </div>
    </div>
  );
}
export { Preloader };

