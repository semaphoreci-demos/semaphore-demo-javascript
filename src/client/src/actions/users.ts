import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ThunkDispatch } from 'redux-thunk';

import {
  fetchAllUsersCall,
  updateUserCall,
  createUserCall,
  removeUserCall,
  fetchOneUserCall,
} from '../api';
import { IRootState, ICreatedUser, IUser, isCreatedUser } from '../reducers/initialState';
import { AxiosError, AxiosResponse } from 'axios';
import {
  UsersActionTypes,
} from '../constants/users';

export const fetchOneUserActions = createAsyncAction(
  UsersActionTypes.FETCH_ONE_REQUEST,
  UsersActionTypes.FETCH_ONE_SUCCESS,
  UsersActionTypes.FETCH_ONE_FAILURE,
)<string, ICreatedUser, AxiosError>();

export const fetchOneUser = (
  id: string,
) => (
  dispatch: ThunkDispatch<IRootState, null, ActionType<typeof fetchOneUserActions>>,
) => {
  dispatch(fetchOneUserActions.request(id));
  return fetchOneUserCall(id)
    .then((result: AxiosResponse<ICreatedUser>) => {
      return dispatch(fetchOneUserActions.success(result.data));
    })
    .catch((error: AxiosError) => {
      return dispatch(fetchOneUserActions.failure(error));
    });
};

export const fetchAllUsersActions = createAsyncAction(
  UsersActionTypes.FETCH_ALL_REQUEST,
  UsersActionTypes.FETCH_ALL_SUCCESS,
  UsersActionTypes.FETCH_ALL_FAILURE,
)<void, ICreatedUser[], AxiosError>();

export const fetchUsers = () => (
  dispatch: ThunkDispatch<IRootState, null, ActionType<typeof fetchAllUsersActions>>,
) => {
  dispatch(fetchAllUsersActions.request());

  return fetchAllUsersCall()
    .then((result: AxiosResponse<ICreatedUser[]>) => {
      return dispatch(fetchAllUsersActions.success(result.data));
    })
    .catch((error: AxiosError) => {
      return dispatch(fetchAllUsersActions.failure(error));
    });
};

export const saveUserActions = createAsyncAction(
  UsersActionTypes.SAVE_ONE_REQUEST,
  UsersActionTypes.SAVE_ONE_SUCCESS,
  UsersActionTypes.SAVE_ONE_FAILURE,
)<IUser|ICreatedUser, ICreatedUser, AxiosError>();

export const saveUser = (
  user: IUser|ICreatedUser,
) => (
  dispatch: ThunkDispatch<IRootState, null, ActionType<typeof saveUserActions>>,
) => {
  dispatch(saveUserActions.request(user));

  let apiCall;
  if (isCreatedUser(user)) {
    apiCall = updateUserCall(user);
  } else {
    apiCall = createUserCall(user);
  }

  return apiCall
    .then((result: AxiosResponse<ICreatedUser>) => {
      return dispatch(saveUserActions.success(result.data));
    })
    .catch((error: AxiosError) => {
      return dispatch(saveUserActions.failure(error));
    });
};

export const removeUserActions = createAsyncAction(
  UsersActionTypes.REMOVE_ONE_REQUEST,
  UsersActionTypes.REMOVE_ONE_SUCCESS,
  UsersActionTypes.REMOVE_ONE_FAILURE,
)<string, string, AxiosError>();

export const removeUser = (
  id: string,
) => (
  dispatch: ThunkDispatch<IRootState, null, ActionType<typeof removeUserActions>>,
) => {
  dispatch(removeUserActions.request(id));

  return removeUserCall(id)
    .then((result: AxiosResponse<null>) => {
      return dispatch(removeUserActions.success(id));
    })
    .catch((error: AxiosError) => {
      return dispatch(removeUserActions.failure(error));
    });
};
