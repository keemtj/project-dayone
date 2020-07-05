import axios from 'axios';

const client = axios.create();

export const userApi = {
  getUsers: () => client.get('/api/users').then((r) => console.log(r.data)),
};

export default userApi;
