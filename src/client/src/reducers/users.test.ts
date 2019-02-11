import { initialState } from '../reducers/initialState';
import reducer from './users';
import { fetchOneUserActions } from '../actions';

describe('users selectors', () => {
  it('select users', () => {
    const userId = '1';

    const expectedState = {
      ...initialState.users,
      loading: true,
    };

    expect(reducer(undefined, fetchOneUserActions.request(userId))).toEqual(expectedState);
  });
});
