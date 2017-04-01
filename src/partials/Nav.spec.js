import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Nav from './Nav'

test('Nav snapshot test', () => {
  const component = shallow(
    <Nav />
  )
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Nav with extras snapshot test', () => {
  const component = shallow(
    <Nav className="nav--footer" extras />
  )
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
