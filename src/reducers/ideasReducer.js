import * as types from '../actions/types';
import { createReducer, successType } from 'lib/callAPI';

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case successType(types.GET_IDEAS):
      return action.response;
    default:
      return state;
  }
};


export default createReducer(types.GET_IDEAS, dataReducer);
