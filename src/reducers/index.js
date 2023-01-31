import { combineReducers } from 'redux';
import favoriteReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const reducers = combineReducers({movieReducer, favoriteReducer})

export default reducers;