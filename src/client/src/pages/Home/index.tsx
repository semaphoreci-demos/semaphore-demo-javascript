import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import Page from './Page';
import { IRootState } from '../../reducers/initialState';
import { RootActions } from '../../reducers';

const mapStateToProps = (state: IRootState) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => {
  return {
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default Container;
