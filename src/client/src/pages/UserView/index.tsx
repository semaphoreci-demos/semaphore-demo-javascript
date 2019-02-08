import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';

import Page from './Page';
import { IState, IUser, ICreatedUser } from '../../reducers/initialState';
import { saveUser, removeUser, fetchUser } from "../../actions";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    onEntitySave: (payload: IUser|ICreatedUser) => dispatch(saveUser(payload)),
    onDelete: (id: string) => dispatch(removeUser(id)),
    fetchUser: (id: string) => dispatch(fetchUser(id)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
