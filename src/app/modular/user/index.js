import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { sagas } from './sagas';

const duck = {
  name: 'user',
  actions,
  // selectors,
  reducer,
  sagas,
  types,
};

export default duck;