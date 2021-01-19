import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../../graphql/mutations';
import { getUser, listUsers } from '../../../graphql/queries';
import axios from 'axios';

export function* createNewUser({ payload }) {
  console.log("asdlkj");
  const { address, city, country } = payload;
  const fullAddress = "+" + [address.replaceAll(' ', '+'), city.replaceAll(' ', '+'), country.replaceAll(' ', '+')].join("+") + "+";
  const url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + fullAddress + "&key=AIzaSyCzzH_05cKBIT1YNbtiuoe-k2w4U3BGG2M"
  axios.get(url).then((res) => {
    const { lat, lng } = res.results[0].geometry.location;
    payload = {
      ...payload,
      "id": payload.email,
      "lat": lat,
      "long": lng,
      "vaccinated": true
    };
  });

  API.graphql(graphqlOperation({
    query: createUser, variables: {
      input: payload.user
    }, authMode: 'AMAZON_COGNITO_USER_POOLS'
  }));
}

export function* getCurrentUser({ payload }) {
  const filter = {};
  API.graphql(graphqlOperation({
    query: getUser, filter: filter
    , authMode: 'AMAZON_COGNITO_USER_POOLS'
  }));
}


export function* getVaccinated

export function* listVaccinatedUserLongLat() {
  const filter = { vaccinated: { eq: true } };
  API.graphql(graphqlOperation({
    query: listUsers, variables: {
      filter: filter
    }, authMode: 'AMAZON_COGNITO_USER_POOLS'
  }));
}


export function* watchCreateUserAsync() {
  yield takeEvery(types.CREATE_USER, createNewUser);
}

export function* watchListVaccinatedUserLongLat() {
  yield takeEvery(types.LIST_VACCINATED_USER, listVaccinatedUserLongLat);
}

export const sagas = [
  watchCreateUserAsync,
]