import { NameSpace } from '../root-reducer.js';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserEmail = (state) => state[NameSpace.USER].userEmail;

export { getAuthorizationStatus, getUserEmail };
