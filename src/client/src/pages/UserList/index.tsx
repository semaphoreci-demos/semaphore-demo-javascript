import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import Page from './Page';
import { IRootState } from '../../reducers/initialState';
import { fetchUsers, removeUser } from '../../actions';
import { usersSelector } from '../../selectors';
import { RootActions } from '../../reducers';

const mapStateToProps = (state: IRootState) => {
  return {
    users: usersSelector(state),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
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
