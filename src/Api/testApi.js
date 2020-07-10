import axios from 'axios';

const posts = axios.create();

const testApi = {
  getDiaries: () => posts.get('/api/posts').then((res) => res.data),
};

export default testApi;
