import { combineReducers } from 'redux';
import { mapReducer } from './map/mapReducers';

export default combineReducers({
   map: mapReducer
})