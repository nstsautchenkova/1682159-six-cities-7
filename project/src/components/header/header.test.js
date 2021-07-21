import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import Header from './header.jsx';
import { AuthorizationStatus } from '../../const.js';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render "Header" if user no_auth', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render "Header" if user auth', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Sign out/i)).toBeInTheDocument();
  });
});
