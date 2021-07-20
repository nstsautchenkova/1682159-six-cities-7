import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../const.js';
import Logo from '../logo/logo.jsx';
import { logout } from '../../store/api-actions.js';
import { getAuthorizationStatus } from '../../store/user/selectors.js';


function Header(props) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userEmail = localStorage.getItem('email');
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
  };
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

export default Header;
