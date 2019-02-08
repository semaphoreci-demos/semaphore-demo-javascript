import { createAction } from 'redux-actions';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  fetchAllUsersCall,
  updateUserCall,
  createUserCall,
  removeUserCall,
  fetchOneUserCall,
} from "../api";
import { IState, ICreatedUser, IUser, isCreatedUser } from '../reducers/initialState';
import { AxiosError, AxiosResponse } from 'axios';

export const fetchUserStart = createAction('FETCH_USER_START');
export const fetchUserSuccess = createAction('FETCH_USER_SUCCESS');
export const fetchUserFailure = createAction('FETCH_USER_FAILURE');

export const fetchUser = (id: string) => (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  dispatch(fetchUserStart());

  fetchOneUserCall(id)
    .then((result: AxiosResponse<ICreatedUser>) => {
      dispatch(fetchUserSuccess(result.data));
    })
    .catch((error: AxiosError) => {
      dispatch(fetchUserFailure(error));
    });
};

export const fetchAllUsersStart = createAction('FETCH_USERS_START');
export const fetchAllUsersSuccess = createAction('FETCH_USERS_SUCCESS');
export const fetchAllUsersFailure = createAction('FETCH_USERS_FAILURE');

export const fetchUsers = () => (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  dispatch(fetchAllUsersStart());

  fetchAllUsersCall()
    .then((result: AxiosResponse<ICreatedUser[]>) => {
      dispatch(fetchAllUsersSuccess(result.data));
    })
    .catch((error: AxiosError) => {
      dispatch(fetchAllUsersFailure(error));
    });
};

export const saveUserStart = createAction('SAVE_USER_START');
export const saveUserSuccess = createAction('SAVE_USE_SUCCESS');
export const saveUserFailure = createAction('SAVE_USER_FAILURE');

export const saveUser = (user: IUser|ICreatedUser) => (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  dispatch(saveUserStart());

  let apiCall;
  if (isCreatedUser(user)) {
    apiCall = updateUserCall(user);
  } else {
    apiCall = createUserCall(user);
  }

  apiCall
    .then((result: AxiosResponse<ICreatedUser[]>) => {
      dispatch(saveUserSuccess(result.data));
    })
    .catch((error: AxiosError) => {
      dispatch(saveUserFailure(error));
    });
};

export const removeUserStart = createAction('REMOVE_USER_START');
export const removeUserSuccess = createAction('REMOVE_USER_SUCCESS');
export const removeUserFailure = createAction('REMOVE_USER_FAILURE');

export const removeUser = (id: string) => (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  dispatch(removeUserStart());

  removeUserCall(id)
    .then((result: AxiosResponse<null>) => {
      dispatch(removeUserSuccess(id));
    })
    .catch((error: AxiosError) => {
      dispatch(removeUserFailure(error));
    });
};