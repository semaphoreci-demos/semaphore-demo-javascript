import { History } from 'history';
import { combineReducers, } from 'redux';
import { IRootState } from './initialState';
import router from './router';
import users from './users';
import { UsersActions } from './users';
import { RouterAction } from 'connected-react-router';

export type RootActions = UsersActions | RouterAction;

export default (history: History) => combineReducers<IRootState>({
  users,
  router: router(history),
});
