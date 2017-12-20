import React from 'react'
import App from '../App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import fetch from 'jest-fetch-mock'
import testData from './testData'
Enzyme.configure({ adapter: new Adapter() })

/* globals beforeEach describe it expect */
window.fetch = fetch
// This replaces the global fetch with the mock fetch.

describe('integration testing', () => {
  let app

  beforeEach(done => {
    fetch.mockResponse(JSON.stringify(testData))

    app = mount(<App />)
    setImmediate(() => {
      app.update()
      done()
    })
  })
  it('does stuff', () => {
    expect(true).toBe(true)
  })
})
