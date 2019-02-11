import axios from 'axios';
import configureMockStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchOneUser, fetchUsers, saveUser, removeUser } from './users';
import { initialState, IRootState } from '../reducers/initialState';
import { UsersActionTypes } from '../constants';
import { AnyAction } from 'redux';

const middlewares = [thunk];
const mockStore = configureMockStore<IRootState>(middlewares);

jest.mock('axios');

describe('users actions', () => {
  it('fetch one user', () => {
    const userId = '1';
    const user = {
      id: 1,
      username: 'test',
      description: 'test',
    };
    const resp = {data: {...user}};
    (axios as any).mockResolvedValue(resp);

    const expectedActions = [
      { type: UsersActionTypes.FETCH_ONE_REQUEST, payload: userId },
      { type: UsersActionTypes.FETCH_ONE_SUCCESS, payload: user }
    ];
    const store: MockStore<IRootState, AnyAction> = mockStore(initialState);
    return fetchOneUser(userId)(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetch all users', () => {
    const userId = '1';
    const user = {
      id: 1,
      username: 'test',
      description: 'test',
    };
    const resp = {data: [{...user}]};
    (axios as any).mockResolvedValue(resp);

    const expectedActions = [
      { type: UsersActionTypes.FETCH_ALL_REQUEST },
      { type: UsersActionTypes.FETCH_ALL_SUCCESS, payload: [user] }
    ];
    const store: MockStore<IRootState, AnyAction> = mockStore(initialState);
    return fetchUsers()(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('remove user', () => {
    const userId = '1';
    const user = {
      id: userId,
      username: 'test',
      description: 'test',
    };
    const resp = {data: {...user}};
    (axios as any).mockResolvedValue(resp);

    const expectedActions = [
      { type: UsersActionTypes.REMOVE_ONE_REQUEST, payload: userId },
      { type: UsersActionTypes.REMOVE_ONE_SUCCESS, payload: userId }
    ];
    const store: MockStore<IRootState, AnyAction> = mockStore(initialState);
    return removeUser(userId)(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('save user', () => {
    const userId = '1';
    const userData = {
      username: 'test',
      description: 'test',
    };
    const user = {
      ...userData,
      id: userId,
    };
    const resp = {data: {...user}};
    (axios as any).mockResolvedValue(resp);

    const expectedActions = [
      { type: UsersActionTypes.SAVE_ONE_REQUEST, payload: userData },
      { type: UsersActionTypes.SAVE_ONE_SUCCESS, payload: user }
    ];
    const store: MockStore<IRootState, AnyAction> = mockStore(initialState);
    return saveUser(userData)(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
