import { RouterState } from 'connected-react-router';

export interface IUser {
  readonly username: string;
  readonly description: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age?: number;
}

export interface ICreatedUser extends IUser {
  readonly id: string;
}

export function isCreatedUser(object: any): object is ICreatedUser {
  return object.id !== undefined;
}

export interface IUsers {
  readonly [key: string]: ICreatedUser;
}

export type UserIds = string[];

export interface IUsersState {
  readonly itemIds: UserIds;
  readonly items: IUsers;
  readonly loading: boolean;
  readonly loaded: boolean;
}

export interface IRootState {
  readonly users: IUsersState;
  readonly router?: RouterState;
}

export const initialState: IRootState = {
  users: {
    itemIds: [],
    items: {},
    loading: false,
    loaded: false,
  },
};
