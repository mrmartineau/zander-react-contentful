import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Home from './Home';

test('Home snapshot test', () => {
  const component = shallow(<Home />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
