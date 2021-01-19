import { action } from 'typesafe-actions';
import * as types from './types';

export const signUp = (userInfo) => action(types.SIGN_UP, { userInfo });
export const login = (userInfo) => action(types.LOGIN, { userInfo });
export const logOut = (userInfo) => action(types.LOG_OUT, { userInfo });