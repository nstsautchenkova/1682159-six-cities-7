import {
  ActionType,
  commentsAlert,
  selectCity,
  selectListRent,
  defaultCityMap,
  loadOffers,
  nearbyList,
  requireAuthorization,
  userLogout,
  redirectToRoute,
  reviewsList,
  comments,
  favoriteHotel
} from './action.js';

describe('Actions', () => {
  it('action creator for commentsAlert returns correct action', () => {
    const expectedAction = {
      type: ActionType.COMMENT_ALERT,
      payload: undefined,
    };
    expect(commentsAlert()).toEqual(expectedAction);
  });

  it('action creator for selectCity returns correct action', () => {
    const expectedAction = {
      type: ActionType.SELECT_CITY,
      payload: undefined,
    };
    expect(selectCity()).toEqual(expectedAction);
  });

  it('action creator for selectListRent returns correct action', () => {
    const expectedAction = {
      type: ActionType.SELECT_LIST_RENT,
      payload: undefined,
    };
    expect(selectListRent()).toEqual(expectedAction);
  });

  it('action creator for defaultCityMap returns correct action', () => {
    const expectedAction = {
      type: ActionType.DEFAULT_CITY_MAP,
      payload: undefined,
    };
    expect(defaultCityMap()).toEqual(expectedAction);
  });

  it('action creator for loadOffers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: undefined,
    };
    expect(loadOffers()).toEqual(expectedAction);
  });

  it('action creator for nearbyList returns correct action', () => {
    const expectedAction = {
      type: ActionType.NEARBY_LIST,
      payload: undefined,
    };
    expect(nearbyList()).toEqual(expectedAction);
  });

  it('action creator for requireAuthorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: undefined,
    };
    expect(requireAuthorization()).toEqual(expectedAction);
  });

  it('action creator for userLogout returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };
    expect(userLogout()).toEqual(expectedAction);
  });

  it('action creator for redirectToRoute returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: undefined,
    };
    expect(redirectToRoute()).toEqual(expectedAction);
  });

  it('action creator for reviewsList returns correct action', () => {
    const expectedAction = {
      type: ActionType.REVIEW_LIST,
      payload: undefined,
    };
    expect(reviewsList()).toEqual(expectedAction);
  });

  it('action creator for comments returns correct action', () => {
    const expectedAction = {
      type: ActionType.NEW_COMMENTS,
      payload: undefined,
    };
    expect(comments()).toEqual(expectedAction);
  });

  it('action creator for favoriteHotel returns correct action', () => {
    const expectedAction = {
      type: ActionType.FAVORITE,
      payload: undefined,
    };
    expect(favoriteHotel()).toEqual(expectedAction);
  });
});
