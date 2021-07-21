import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import CitiesList from './сities-list';

const history = createMemoryHistory();
const mockStore = configureStore({});
describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      PROCESS: { getDefaultCity: 'Paris' },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Paris/i)).toBeInTheDocument();
  });
});
