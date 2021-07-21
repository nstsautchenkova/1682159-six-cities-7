import { NameSpace } from '../root-reducer.js';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export { getAuthorizationStatus };
