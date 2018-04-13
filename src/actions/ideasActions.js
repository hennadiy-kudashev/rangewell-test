import IdeaApi from '../api/IdeaApi';
import * as types from './types';
import { createAction } from '../lib/callAPI';

const ideaApi = new IdeaApi();

export const getIdeas = () => {
  return createAction({
    type: types.GET_IDEAS,
    callAPI: () => ideaApi.get(),
    shouldCallAPI: state => !state.ideas.data
  });
};
