import axios from 'axios';
import { IUser, ICreatedUser } from '../reducers/initialState';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllUsersCall = () => axios({
  method: 'get',
  url: '/users',
});

export const fetchOneUserCall = (id: string) => axios({
  method: 'get',
  url: `/users/${id}`,
});

export const createUserCall = (user: IUser) => axios({
  method: 'post',
  url: '/users',
  data: user,
});

export const updateUserCall = (user: ICreatedUser) => axios({
  method: 'put',
  url: `/users/${user.id}`,
  data: user,
});

export const removeUserCall = (id: string) => axios({
  method: 'delete',
  url: `/users/${id}`,
});
