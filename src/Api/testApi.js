import axios from 'axios';

const posts = axios.create();

const testApi = {
  getDiaries: () =>
    posts.get('/api/posts').then((r) => console.log('[posts data]', r.data)),
};

export default testApi;
