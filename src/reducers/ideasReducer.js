import * as types from '../actions/types';
import initialState from '../store/initialState';

export default (state = initialState.ideas, action) => {
  switch (action.type) {
    case types.GET_IDEAS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data
        }
      };
    default:
      return state;
  }
};
