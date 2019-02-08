import { History } from 'history';
import { combineReducers, Reducer, AnyAction, } from 'redux'
import { handleActions, } from 'redux-actions';
import { connectRouter } from 'connected-react-router';

import {
  fetchAllUsersStart,
  fetchAllUsersSuccess,
  fetchAllUsersFailure,
  saveUserStart,
  saveUserSuccess,
  saveUserFailure,
  removeUserStart,
  removeUserSuccess,
  removeUserFailure,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} from '../actions';

import { initialState, IUsersState, ICreatedUser, IUsers, IState } from './initialState';

const users = handleActions<IUsersState, AnyAction>({
    [fetchAllUsersStart.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    },
    [fetchAllUsersSuccess.toString()]: (state: IUsersState, action: AnyAction) => {
      const items: IUsers = action.payload
        .reduce((result: IUsers, current: ICreatedUser) => ({...result, [current.id]: current}), {});
      const itemIds = Object.keys(items)
        .filter((id: string) => items[id]);
      return {
        ...state,
        itemIds,
        items,
        loading: false,
        loaded: true,
      };
    },
    [fetchAllUsersFailure.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: false,
      };
    },
    [fetchUserStart.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: true,
      };
    },
    [fetchUserSuccess.toString()]: (state: IUsersState, action: AnyAction) => {
      const items: IUsers = {
        ...state.items,
        [action.payload.id]: action.payload,
      };
      const itemIds = Object.keys(items)
        .filter((id: string) => items[id]);
      return {
        ...state,
        itemIds,
        items,
        loading: false,
      };
    },
    [fetchUserFailure.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: false,
      };
    },
    [saveUserStart.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: true,
      };
    },
    [saveUserSuccess.toString()]: (state: IUsersState, action: AnyAction) => {
      const items: IUsers = {
        ...state.items,
        [action.payload.id]: action.payload,
      };

      const itemIds = Object.keys(items)
        .filter((id: string) => items[id]);

      return {
        ...state,
        itemIds,
        items,
        loading: false,
      };
    },
    [saveUserFailure.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: false,
      };
    },
    [removeUserStart.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: true,
      };
    },
    [removeUserSuccess.toString()]: (state: IUsersState, action: AnyAction) => {
      const items: IUsers = {
        ...state.items,
        [action.payload]: undefined,
      };

      const itemIds = Object.keys(items)
        .filter((id: string) => items[id]);

      return {
        ...state,
        itemIds,
        items,
        loading: false,
      };
    },
    [removeUserFailure.toString()]: (state: IUsersState, action: AnyAction) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
  initialState.users
);

export default (history: History) => combineReducers<IState>({
  users,
  router: connectRouter(history),
} as any); // TODO Find workaround for this cast
