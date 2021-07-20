import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api.js';
import { ActionType } from './action.js';
import { fetchOffersList, fetchNearbyList, checkAuth, login, fetchComments, newComments, fetchFavorite } from './api-actions';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const.js';
import { mapOffersToClient, mapCommentsToClient, mapFavoriteToClient } from '../utils.js';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => { });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: 'test@test.ru', password: '123456' };
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to GET /offersList', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();
    const offer = [
      {
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
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
      }
    ];

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, offer);

    return offersLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: mapOffersToClient(offer),
        });
      });
  });

  it('should make a correct API call to GET /fetchNearbyList', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const nearbyLoader = fetchNearbyList(offerId);

    const offer = [
      {
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
          },
          'name': 'Amsterdam'
        },
        'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
        'host': {
          'avatar_url': 'img/1.png',
          'id': 3,
          'is_pro': true,
          'name': 'Angelina'
        },
        'id': 1,
        'images': ['img/1.png', 'img/2.png'],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'max_adults': 4,
        'preview_image': 'img/1.png',
        'price': 120,
        'rating': 4.8,
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment'
      }
    ];

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}${APIRoute.NEARBY}`)
      .reply(200, offer);

    return nearbyLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEARBY_LIST,
          payload: mapOffersToClient(offer),
        });
      });
  });

  it('should make a correct API call to GET /fetchComments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsId = 1;
    const commentsLoader = fetchComments(reviewsId);

    const comment = [
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        }
      }
    ];

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${reviewsId}`)
      .reply(200, comment);

    return commentsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REVIEW_LIST,
          payload: mapCommentsToClient(comment),
        });
      });
  });

  it('should make a correct API call to POST /newComments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 1;
    const fakeComment = {
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'rating': 4,
    };
    const commentsPost = newComments(offerId, fakeComment);
    const comment = [
      {
        'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        'date': '2019-05-08T14:13:56.569Z',
        'id': 1,
        'rating': 4,
        'user': {
          'avatar_url': 'img/1.png',
          'id': 4,
          'is_pro': false,
          'name': 'Max',
        }
      }
    ];
    apiMock
      .onPost(`${APIRoute.REVIEWS}/${offerId}`, fakeComment)
      .reply(200, comment);

    return commentsPost(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.NEW_COMMENTS,
          payload: mapCommentsToClient(comment),
        });
      });
  });

  it('should make a correct API call to POST /fetchFavorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeOfferFavorite =
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
      'is_favorite': true,
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
    };
    const fakeOfferId = 1;
    const fakeStatus = 1;
    const favoritePost = fetchFavorite(fakeOfferFavorite);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${fakeOfferId}/${fakeStatus}`)
      .reply(200, fakeOfferFavorite);

    return favoritePost(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FAVORITE,
          payload: mapFavoriteToClient(fakeOfferFavorite),
        });
      });
  });
});