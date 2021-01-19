import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import userDuck from '../user';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../../graphql/mutations';
import axios from 'axios';
import googleServices from '../../../services/googleServices';

// const { Client } = require("@googlemaps/google-maps-services-js");

export function* signUp({ payload }) {

  yield call([Auth, 'signUp'], {
    username: payload.userInfo.email,
    password: payload.userInfo.password,
    attributes: {
      email: payload.userInfo.email,
    }
  });

  yield call([Auth, 'signIn'], payload.userInfo.email,
    payload.userInfo.password);

  const { address, city, country } = payload.userInfo;

  const data = yield call(googleServices.getLongLat, address, city, country, payload.userInfo);

  yield call([API, 'graphql'], {
    query: createUser, variables: {
      input: data
    }, authMode: 'AMAZON_COGNITO_USER_POOLS'
  })

  // console.log(Auth.currentSession().getAccessToken().getJwtToken());
};

function* createNewUser(payload) {
  // const geocoder = new google.maps.Geocoder();
  //   .then(() => {
  //     console.log(Auth.currentSession());
  //   }).then(() => {
  //     const { address, city, country } = payload.userInfo;
  //     const data = yield call(googleServices.getLongLat, address, city, country, payload.userInfo);
  //     console.log(data);
  //     API.graphql({
  //       query: createUser, variables: {
  //         input: data
  //       }, authMode: 'AMAZON_COGNITO_USER_POOLS'
  //     });
  // API.graphql(graphqlOperation(createUser, { input: data }))
}


// const movies = yield call(moviesService.getMoviesByTitle, payload.title);
// yield put(actions.saveMovies(movies));
// yield put(actions.saveTitle(payload.title));

export function* login({ payload }) {
  yield call([Auth, 'signIn'], payload.userInfo.email, payload.userInfo.password);
}

export function* logOut() {
  try {
    Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export const isLoggedIn = () => {
  const token = localStorage.getItem('jwtToken');
  return !!token;
}


export function* watchLogOutAsync() {
  yield takeEvery(types.LOG_OUT, logOut);
}
export function* watchSignUpAsync() {
  yield takeLatest(types.SIGN_UP, signUp);
}
export function* watchLoginAsync() {
  yield takeLatest(types.LOGIN, login);
}

export const sagas = [
  watchSignUpAsync,
  watchLoginAsync,
  watchLogOutAsync
]