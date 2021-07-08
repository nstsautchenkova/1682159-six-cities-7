import { NameSpace } from '../root-reducer';

const getNearby = (state) => state[NameSpace.DATA].nearby;
const getComments = (state) => state[NameSpace.DATA].comments;

export { getNearby, getComments };
