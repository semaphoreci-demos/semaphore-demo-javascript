import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';

import Page from './Page';
import { IState, IUser, ICreatedUser } from '../../reducers/initialState';
import { saveUser } from "../../actions";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
    onEntitySave: (payload: IUser|ICreatedUser) => dispatch(saveUser(payload)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
