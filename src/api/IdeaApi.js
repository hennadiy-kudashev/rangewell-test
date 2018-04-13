import ServerApi from './ServerApi';

class IdeaApi extends ServerApi {
  get() {
    return super.get(`/ideas`);
  }

  remove(id){
    return super.delete(`/ideas/${id}`).then(()=>({id}));
  }

  add(){
    return super.post(`/ideas`, {
      id: Math.floor(Math.random() * (1000)),
      created_date: new Date().getTime(),
      title: '',
      body: ''
    });
  }

  update(idea){
    return super.put(`/ideas/${idea.id}`, idea);
  }
}

export default IdeaApi;
