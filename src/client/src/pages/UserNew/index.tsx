import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import Page from './Page';
import { IRootState, IUser, ICreatedUser } from '../../reducers/initialState';
import { saveUser } from '../../actions';
import { usersSelector } from '../../selectors';
import { RootActions } from '../../reducers';

const mapStateToProps = (state: IRootState) => {
  return {
    users: usersSelector(state),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
  return {
    onEntitySave: (payload: IUser|ICreatedUser) => dispatch(saveUser(payload)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
