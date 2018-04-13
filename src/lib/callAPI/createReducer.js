import { combineReducers } from 'redux';
import { requestType, successType, failureType } from './createTypes';

const oneOf = (types, fn, actionTyte) => {
  return types.some(type => fn(type) === actionTyte);
};

const loadingFor = types => (state = false, action) => {
  if (oneOf(types, requestType, action.type)) {
    return true;
  }
  if (oneOf(types, successType, action.type)) {
    return false;
  }
  if (oneOf(types, failureType, action.type)) {
    return false;
  }
  return state;
};

const errorFor = types => (state = null, action) => {
  if (oneOf(types, requestType, action.type)) {
    return null;
  }
  if (oneOf(types, successType, action.type)) {
    return null;
  }
  if (oneOf(types, failureType, action.type)) {
    return action.error;
  }
  return state;
};

export default (type, dataReducer) => {
  const types = Array.isArray(type) ? type : [type];
  return combineReducers({
    loading: loadingFor(types),
    data: dataReducer,
    error: errorFor(types)
  });
};
