import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../const.js';
import Logo from '../logo/logo.jsx';
import { logout } from '../../store/api-actions.js';
function Header(props) {
  const { authorizationStatus, signOut, userEmail } = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        signOut();
                      }}
                      to={AppRoute.MAIN}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </> :
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='/login'>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});
const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logout());
  },
});
Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};
//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
