import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';
import { initialState, } from '../../reducers/initialState';

it('renders without crashing', () => {
  const onDelete = (id: string) => {}; // tslint:disable-line no-empty
  const fetchUsers = () => {}; // tslint:disable-line no-empty
  shallow(
    <Page
      users={initialState.users}
      onDelete={onDelete}
      fetchUsers={fetchUsers}
    />
  );
});
