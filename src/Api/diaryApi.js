import axios from 'axios';

const client = axios.create();

export const diaryApi = {
  getDiaries: () => client.get('/api/diaries').then((r) => r.data),
};

export default diaryApi;
