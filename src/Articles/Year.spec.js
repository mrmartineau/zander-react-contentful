import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Year from './Year';
import articleListing from '../state/articleListingStub';
const articles = articleListing;

test('Year view snapshot test', () => {
  const component = shallow(<Year year="2017" articles={articles} />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
