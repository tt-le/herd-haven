import { action} from 'typesafe-actions'; 
import * as types from './types'; 

export const signUp = (userInfo) => action(types.SIGN_UP, { userInfo });