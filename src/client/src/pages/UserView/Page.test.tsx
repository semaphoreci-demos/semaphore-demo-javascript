import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';
import { initialState, IUser, ICreatedUser, } from '../../reducers/initialState';
import {history} from '../../store';
import { routes } from '../../config';

it('renders without crashing', () => {
  const onEntitySave = (payload: IUser|ICreatedUser) => {}; // tslint:disable-line no-empty
  const onDelete = (id: string) => {}; // tslint:disable-line no-empty
  const fetchUsers = () => {}; // tslint:disable-line no-empty
  shallow(
    <Page
      users={initialState.users}
      history={history}
      onEntitySave={onEntitySave}
      onDelete={onDelete}
      fetchUser={fetchUsers}
      match={{
        isExact: false,
        url: routes.users.view,
        path: '',
        params: {id: '1'},
      }}
      location={history.location}
    />
  );
});
