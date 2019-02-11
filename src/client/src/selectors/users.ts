import { IRootState } from '../reducers/initialState';

export const usersSelector = (state: IRootState) => state.users;
