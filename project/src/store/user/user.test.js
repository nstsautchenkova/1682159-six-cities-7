import { user } from './user.js';
import {AuthorizationStatus} from '../../const';
import {
    ActionType,
} from '../action.js';

describe('Reducer: user', () => {
    it('without additional parameters should return initial state', () => {
        expect(user(undefined, {}))
            .toEqual({ authorizationStatus: AuthorizationStatus.UNKNOWN, });
    });

    it('should update authorizationStatus to "AUTH"', () => {
        const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
        const requiredAuthorizationAction = {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        };
    
        expect(user(state, requiredAuthorizationAction))
          .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
      });
    
      it('should update authorizationStatus to "NO_AUTH"', () => {
        const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
        const requiredAuthorizationAction = {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        };
    
        expect(user(state, requiredAuthorizationAction))
          .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
      });
});