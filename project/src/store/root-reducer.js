import { combineReducers } from 'redux';
import { process } from './process/process';
import { data } from './data/data';
import { user } from './user/user';

const NameSpace = {
  DATA: 'DATA',
  PROCESS: 'PROCESS',
  USER: 'USER',
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user,
});

export { NameSpace, rootReducer };
