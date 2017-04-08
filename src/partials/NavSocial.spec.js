import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavSocial from './NavSocial';

test('NavSocial snapshot test', () => {
  const component = shallow(<NavSocial />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
