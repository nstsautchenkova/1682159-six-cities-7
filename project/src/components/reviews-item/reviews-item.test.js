import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import ReviewsItem from './reviews-item.jsx';
import { AuthorizationStatus } from '../../const.js';

const history = createMemoryHistory();
const mockStore = configureStore({});
const review = {
  id: 1,
  user: {
    id: 15,
    isPro: false,
    name: 'Kendall',
    avatarUrl: 'https://7.react.pages.academy/static/avatar/6.jpg',
  },
  rating: 3,
  comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  date: '2021-06-22T16:51:35.215Z',
};
describe('Component: ReviewsItem', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NO_AUTH },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsItem review={review} />
        </Router>
      </Provider>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
