import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../const';
import App from './app';


let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH },
      PROCESS: {
        isDataLoaded: true,
        defaultCityMap: {
          lat: 48.864716,
          lng: 2.349014,
          zoom: 12,
        },
        listOffers: [
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Amsterdam',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatar_url': 'img/1.png',
              'id': 3,
              'is_pro': true,
              'name': 'Angelina',
            },
            'id': 1,
            'images': ['img/1.png', 'img/2.png'],
            'is_favorite': false,
            'is_premium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'max_adults': 4,
            'preview_image': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
        ],
        offers: [
          {
            'bedrooms': 3,
            'city': {
              'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 10,
              },
              'name': 'Amsterdam',
            },
            'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
            'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
            'host': {
              'avatar_url': 'img/1.png',
              'id': 3,
              'is_pro': true,
              'name': 'Angelina',
            },
            'id': 1,
            'images': ['img/1.png', 'img/2.png'],
            'is_favorite': false,
            'is_premium': false,
            'location': {
              'latitude': 52.35514938496378,
              'longitude': 4.673877537499948,
              'zoom': 8,
            },
            'max_adults': 4,
            'preview_image': 'img/1.png',
            'price': 120,
            'rating': 4.8,
            'title': 'Beautiful & luxurious studio at great location',
            'type': 'apartment',
          },
        ],
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);
  });

  it('should render "MAIN_EMPTY" when there is no data', () => {
    history.push(AppRoute.MAIN_EMPTY);
    render(fakeApp);
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Dusseldorf/i)).toBeInTheDocument();
  });

  it('should render "SIGN_IN" when user navigate to "/login"', () => {
    history.push(AppRoute.SIGN_IN);
    render(fakeApp);

    const titleElement = screen.getByTestId('Sign in');
    expect(titleElement).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'test');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it('should render "FAVORITES" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);
  });

  it('should render "OFFER_$ID" when user navigate to "/OFFER_$ID"', () => {
    history.push(AppRoute.OFFER_$ID);
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(fakeApp);
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);
  });
});
