import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import MainEmpty from './main-empty.jsx';
import { AuthorizationStatus } from '../../const.js';

const history = createMemoryHistory();
const mockStore = configureStore({});
describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
      PROCESS: { defaultCityMap: { 'lat': 48.864716, 'lng': 2.349014, 'zoom': 12 } },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainEmpty />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
