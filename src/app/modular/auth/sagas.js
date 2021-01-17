import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import { Auth } from 'aws-amplify';

export function* signUp({ payload }) {
  // async function signUp() {
  try {
    const { user } = yield Auth.signUp({
      username: payload.userInfo.email,
      password: payload.userInfo.password
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}
// const movies = yield call(moviesService.getMoviesByTitle, payload.title);
// yield put(actions.saveMovies(movies));
// yield put(actions.saveTitle(payload.title));


export function* watchSignUpAsync() {
  yield takeEvery(types.SIGN_UP, signUp);
}

export const sagas = [
  watchSignUpAsync
]