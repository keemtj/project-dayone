import axios from 'axios';

const posts = axios.create();

const Api = {
  getDiaries: () =>
    posts
      .get('/api/posts')
      .then((res) => res.data)
      .catch((e) => {
        console.error(e, e.message);
      }),
  postDiaries: (payload) =>
    posts
      .post('/api/posts', payload)
      .then((res) => res.data)
      .then(() => console.log('payload', payload))
      .catch((e) => {
        console.error(e, e.message);
      }),
};

export default Api;
