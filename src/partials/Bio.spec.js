import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Bio from './Bio';

test('Bio snapshot test', () => {
  const component = shallow(<Bio />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
