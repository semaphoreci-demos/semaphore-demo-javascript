export interface IUser {
  username: string;
  description: string;
}

export interface ICreatedUser extends IUser {
  id: string;
}

export function isCreatedUser(object: any): object is ICreatedUser {
  return object.id !== undefined;
}

export interface IUsers {
  [key: string]: ICreatedUser;
}

export type UserIds = string[];

export interface IUsersState {
  itemIds: UserIds
  items: IUsers;
  loading: boolean;
  loaded: boolean;
}

export interface IState {
  users: IUsersState;
}

export const initialState: IState = {
  users: {
    itemIds: [],
    items: {},
    loading: false,
    loaded: false,
  },
};
