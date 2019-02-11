import { ActionType, getType } from 'typesafe-actions';
import { initialState, IUsersState, IUsers } from './initialState';
import * as users from '../actions/users';

export type UsersActions = ActionType<typeof users>;

export default (state: IUsersState = initialState.users, action: UsersActions) => {
  switch (action.type) {
    case getType(users.fetchAllUsersActions.request): {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case getType(users.fetchAllUsersActions.success): {
      const items: IUsers = action.payload
        .reduce((result, current) => ({...result, [current.id]: current}), {});
      const itemIds: string[] = Object.keys(items)
        .filter((id: string) => items[id]);
      return {
        ...state,
        itemIds,
        items,
        loading: false,
        loaded: true,
      };
    }
    case getType(users.fetchAllUsersActions.failure): {
      return {
        ...state,
        loading: false,
      };
    }
    case getType(users.fetchOneUserActions.request): {
      return {
        ...state,
        loading: true,
      };
    }
    case getType(users.fetchOneUserActions.success): {
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
    }
    case getType(users.fetchOneUserActions.failure): {
      return {
        ...state,
        loading: false,
      };
    }
    case getType(users.saveUserActions.request): {
      return {
        ...state,
        loading: true,
      };
    }
    case getType(users.saveUserActions.success): {
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
    }
    case getType(users.saveUserActions.failure): {
      return {
        ...state,
        loading: false,
      };
    }
    case getType(users.removeUserActions.request): {
      return {
        ...state,
        loading: true,
      };
    }
    case getType(users.removeUserActions.success): {
      const {[action.payload]: value, ...items } = state.items;

      const itemIds = Object.keys(items)
        .filter((id: string) => items[id]);

      return {
        ...state,
        itemIds,
        items,
        loading: false,
      };
    }
    case getType(users.removeUserActions.failure): {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
