import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import FormComment from './form-comment';
import { AuthorizationStatus } from '../../const.js';

const history = createMemoryHistory();
const mockStore = configureStore({});
describe('Component: FormComment', () => {
  it('should render "FormComment"', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
      PROCESS: { commentAlert: 'Success' },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <FormComment />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Your review/i)).toBeInTheDocument();
  });

  it('when the user entered the data', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
      PROCESS: { commentAlert: 'Success' },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <FormComment />
        </Router>
      </Provider>,
    );
    userEvent.type(screen.getByTestId('review'), 'test comment');
    expect(screen.getByDisplayValue(/test comment/i)).toBeInTheDocument();
  });
});
