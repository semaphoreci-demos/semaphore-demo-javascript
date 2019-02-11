import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '.';
import {history} from '../../store';
import { initialState, IUser, ICreatedUser } from '../../reducers/initialState';

it('renders without crashing', () => {
  const onEntitySave = (payload: IUser|ICreatedUser) => {}; // tslint:disable-line no-empty
  const onDelete = (id: string) => {}; // tslint:disable-line no-empty
  shallow(
    <UserForm
      users={initialState.users}
      history={history}
      id={''}
      onEntitySave={onEntitySave}
      onDelete={onDelete}
    />
  );
});
