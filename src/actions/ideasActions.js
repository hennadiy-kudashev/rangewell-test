import IdeaApi from '../api/IdeaApi';
import * as types from './types';
import { createAction } from '../lib/callAPI';
import { getListIdeas } from "../reducers/ideasReducer";

const ideaApi = new IdeaApi();

export const getIdeas = () => {
  return createAction({
    type: types.GET_IDEAS,
    callAPI: () => ideaApi.get(),
    shouldCallAPI: state => Object.keys(state.ideas.data.byId).length === 0
  });
};

export const removeIdea = (id) => {
  return createAction({
    type: types.REMOVE_IDEA,
    callAPI: () => ideaApi.remove(id)
  });
};

export const addIdea = () => dispatch=>{
  return dispatch(
    createAction({
      type: types.ADD_IDEA,
      callAPI: () => ideaApi.add()
    })
  ).then(({ response, error }) => {
    dispatch(changeEditMode(response.id, true));
  });
};

export const updateIdea = (idea) => (dispatch, getState)=>{
  const ideaToUpdate = {
    ...getState().ideas.data.byId[idea.id],
    ...idea
  };
  return dispatch(
    createAction({
      type: types.UPDATE_IDEA,
      callAPI: () => ideaApi.update(ideaToUpdate)
    })
  );
};

export const changeEditMode = (id, editable) => {
  return { type: types.CHANGE_EDIT_MODE, id, editable };
};
