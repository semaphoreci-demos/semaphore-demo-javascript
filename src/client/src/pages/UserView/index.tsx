import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import Page from './Page';
import { IRootState, IUser, ICreatedUser } from '../../reducers/initialState';
import { saveUser, removeUser, fetchOneUser } from '../../actions';
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
    onDelete: (id: string) => dispatch(removeUser(id)),
    fetchUser: (id: string) => dispatch(fetchOneUser(id)),
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
