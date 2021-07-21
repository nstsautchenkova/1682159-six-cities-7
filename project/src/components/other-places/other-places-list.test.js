import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import OtherPlaces from './other-places-list.jsx';
import { AuthorizationStatus } from '../../const.js';

const history = createMemoryHistory();
const mockStore = configureStore({});
describe('Component: OtherPlaces', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
      DATA: {
        nearby :[
          {
            'id': 1,
            'previewImage': 'https://7.react.pages.academy/static/hotel/15.jpg',
            'price': 291,
            'rating': 4.3,
            'title': 'Penthouse, 4-5 rooms + 5 balconies',
            'type': 'hotel',
            'bedrooms': 3,
            'maxAdults': 8,
            'isFavorite': false,
            'isPremium': false,
            'images': [
              'https://7.react.pages.academy/static/hotel/12.jpg',
              'https://7.react.pages.academy/static/hotel/18.jpg',
              'https://7.react.pages.academy/static/hotel/20.jpg',
              'https://7.react.pages.academy/static/hotel/13.jpg',
              'https://7.react.pages.academy/static/hotel/10.jpg',
              'https://7.react.pages.academy/static/hotel/4.jpg',
              'https://7.react.pages.academy/static/hotel/7.jpg',
              'https://7.react.pages.academy/static/hotel/15.jpg',
              'https://7.react.pages.academy/static/hotel/2.jpg',
              'https://7.react.pages.academy/static/hotel/17.jpg',
              'https://7.react.pages.academy/static/hotel/16.jpg',
              'https://7.react.pages.academy/static/hotel/6.jpg',
              'https://7.react.pages.academy/static/hotel/11.jpg',
              'https://7.react.pages.academy/static/hotel/3.jpg',
            ],
            'goods': [
              'Towels',
              'Fridge',
              'Air conditioning',
              'Washing machine',
              'Breakfast',
              'Dishwasher',
              'Laptop friendly workspace',
              'Coffee machine',
              'Washer',
              'Baby seat',
            ],
            'host': {
              'id': 25,
              'name': 'Angelina',
              'isPro': true,
              'avatarUrl': 'img/avatar-angelina.jpg',
            },
            'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
            'city': {
              'name': 'Paris',
              'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13,
              },
              'latitude': 48.85661,
              'longitude': 2.351499,
              'zoom': 13,
            },
            'location': {
              'location': {
                'latitude': 48.83961,
                'longitude': 2.342499,
                'zoom': 16,
              },
              'latitude': 48.83961,
              'longitude': 2.342499,
              'zoom': 16,
            },
          },
        ],
      },
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <OtherPlaces />
        </Router>
      </Provider>,
    );
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
