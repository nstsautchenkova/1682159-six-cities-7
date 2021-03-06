import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import { AuthorizationStatus } from '../../const.js';

const history = createMemoryHistory();
const mockStore = configureStore({});
describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <NotFoundPage />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
