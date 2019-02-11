import React from 'react';
import { shallow } from 'enzyme';
import UserList from '.';
import { initialState, } from '../../reducers/initialState';

it('renders without crashing', () => {
  const onDelete = (id: string) => {}; // tslint:disable-line no-empty
  shallow(
    <UserList
      users={initialState.users}
      onDelete={onDelete}
    />
  );
});
