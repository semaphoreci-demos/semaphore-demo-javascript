import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';
import { initialState, IUser, ICreatedUser, } from '../../reducers/initialState';
import {history} from '../../store';

it('renders without crashing', () => {
  const onEntitySave = (payload: IUser|ICreatedUser) => {}; // tslint:disable-line no-empty
  shallow(
    <Page
      users={initialState.users}
      history={history}
      onEntitySave={onEntitySave}
    />
  );
});
