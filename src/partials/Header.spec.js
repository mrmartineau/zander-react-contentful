import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from './Header';

test('Header snapshot test', () => {
  const component = shallow(
    <Header
      title="The title"
      subtitle="The subtitle"
      body="The body"
      date="2017-02-02T00:00+00:00"
    />,
  );
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
