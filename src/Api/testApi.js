import axios from 'axios';

const diaries = axios.create();

export const testApi = {
  getDiaries: () => diaries.get('/api/posts').then((r) => console.log(r.data)),
};

export default testApi;
