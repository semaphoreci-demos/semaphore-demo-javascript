import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';
import { initialState } from '../../reducers/initialState';

it('renders without crashing', () => {
  const users = initialState.users;
  shallow(<Header users={users} />);
});
