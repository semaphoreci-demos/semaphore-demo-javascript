import { initialState } from '../reducers/initialState';
import { usersSelector } from './users';

describe('users selectors', () => {
  it('select users', () => {
    const state = initialState;

    const expectedState = initialState.users;

    expect(usersSelector(state)).toEqual(expectedState);
  });
});
