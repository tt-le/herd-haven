import { action } from 'typesafe-actions';
import * as types from './types';

export const createUser = (user) => action(types.CREATE_USER, { user });