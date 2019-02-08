import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';

import Page from '../../components/Header';
import { IState } from '../../reducers/initialState';

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, null, AnyAction>) => {
  return {
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
