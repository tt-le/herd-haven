import { all, fork } from "redux-saga/effects";
import { sagas as authSagas } from './modular/auth/sagas'; 

const allSagas = [
  ...authSagas
];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
