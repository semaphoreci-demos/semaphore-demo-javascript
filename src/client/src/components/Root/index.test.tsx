import React from 'react';
import { shallow } from 'enzyme';
import Root from '.';
import configureStore, {history} from '../../store';

it('renders without crashing', () => {
  const {store} = configureStore();
  shallow(
    <Root
      store={store}
      history={history}
    />,
  );
});
