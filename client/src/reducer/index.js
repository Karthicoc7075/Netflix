import {combineReducers} from 'redux';
import {auth} from './auth';
import {movie} from './movie'
export const reducer = combineReducers({auth,movie})
