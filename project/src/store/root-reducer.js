import { combineReducers } from 'redux';
import { process } from './process/process';
import { data } from './data/data';
import { user } from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  PROCESS: 'PROCESS',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});
