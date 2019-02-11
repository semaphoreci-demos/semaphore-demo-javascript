import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

it('renders without crashing', () => {
  shallow(<Page />);
});
