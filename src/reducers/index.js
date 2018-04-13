import { combineReducers } from 'redux';
import ideasReducer from './ideasReducer';

export default combineReducers({
  ideas: ideasReducer
});
