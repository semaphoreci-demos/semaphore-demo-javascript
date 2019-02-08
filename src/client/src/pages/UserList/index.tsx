import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';

import Page from './Page';
import { IState } from '../../reducers/initialState';
import { fetchUsers, removeUser } from "../../actions";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    onDelete: (id: string) => dispatch(removeUser(id)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
