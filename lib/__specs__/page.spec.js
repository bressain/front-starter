import React from 'react/addons'
const TestUtils = React.addons.TestUtils
require('chai').should()

import Page from '../page'

describe('page', () => {
  it('renders', () => {
    const node = TestUtils.renderIntoDocument(React.createElement(Page, {}))
    React.findDOMNode(node).should.exist
  })
})
