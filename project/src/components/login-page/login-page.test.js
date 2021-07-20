import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page.jsx';
import { AppRoute } from '../../const';

const mockStore = configureStore({});

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.SIGN_IN);

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </Provider>,
    );
    const titleElement = screen.getByTestId('Sign in');
    expect(titleElement).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'test');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});