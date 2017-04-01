import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Masthead from './Masthead'

test('Masthead snapshot test', () => {
  const component = shallow(
    <Masthead />
  )
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
