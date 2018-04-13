import * as types from '../actions/types';
import { createReducer, successType } from 'lib/callAPI';
import {combineReducers} from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case successType(types.GET_IDEAS):
      const nextState = { ...state };
      action.response.forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;
    case successType(types.REMOVE_IDEA):
      const copy = { ...state };
      delete copy[action.response.id];
      return copy;
    case successType(types.ADD_IDEA):
      return {
        ...state,
        [action.response.id]: action.response
      };
    default:
      return state;
  }
};

const editableID = (state = null, action) => {
  switch (action.type) {
    case types.CHANGE_EDIT_MODE:
      return action.editable ? action.id: null;
    default:
      return state;
  }
};

const dataReducer = combineReducers({
  byId,
  editableID
});


export default createReducer([types.GET_IDEAS, types.REMOVE_IDEA, types.ADD_IDEA, types.UPDATE_IDEA], dataReducer);

export const getListIdeas = state =>{
  const { byId } = state;
  return Object.keys(byId).map(id=>byId[id]);
};