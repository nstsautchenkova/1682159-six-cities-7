import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/api-actions.js';
import Logo from '../logo/logo.jsx';
import { validateEmail } from '../../utils.js';

function LoginPage() {
  const dispatch = useDispatch();
  const onSubmit = (authData) => {
    dispatch(login(authData));
  };

  const loginRef = useRef();
  const passwordRef = useRef();
  const formValidLoginRef = useRef();
  const formValidPasswordRef = useRef();

  const checkValid = () => {
    if (!validateEmail(loginRef.current.value)) {
      loginRef.current.style.border = '1px solid red';
      formValidLoginRef.current.style.display = 'block';
    } else {
      loginRef.current.style.border = '1px solid #e6e6e6';
      formValidLoginRef.current.style.display = 'none';
    }
    if (passwordRef.current.value === '') {
      passwordRef.current.style.border = '1px solid red';
      formValidPasswordRef.current.style.display = 'block';
    } else {
      passwordRef.current.style.border = '1px solid #e6e6e6';
      formValidPasswordRef.current.style.display = 'none';
    }
    if (passwordRef.current.value === '' || loginRef.current.value === '') {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkValid()) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={loginRef}
                    required=""
                    data-testid="login"
                  />
                  <div
                    className="form__valid-login"
                    ref={formValidLoginRef}
                    style={{ display: 'none', padding: '10px', position: 'relative', top: '-10px', background: '#ffd6d6' }}
                  >
                    Enter email in the format <b>email@gmail.com</b>!
                  </div>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required=""
                    data-testid="password"
                  />
                  <div
                    className="form__valid-login"
                    ref={formValidPasswordRef}
                    style={{ display: 'none', padding: '10px', position: 'relative', top: '-10px', background: '#ffd6d6' }}
                  >
                    Enter password!
                  </div>
                </div>
                <button className="login__submit form__submit button" type="submit" data-testid="Sign in">Sign in</button>
              </form>
            </section>
          </div>
        </main>

      </div>
    </>
  );
}

export default LoginPage;

