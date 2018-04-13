import ServerApi from './ServerApi';

class IdeaApi extends ServerApi {
  get() {
    return super.get(`/ideas`);
  }
}

export default IdeaApi;
