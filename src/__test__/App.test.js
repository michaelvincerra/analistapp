import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import fetch from 'jest-fetch-mock'
import testData from './testData'

/* globals beforeEach describe it */
window.fetch = fetch

describe('integration testing', () => {
  beforeEach(done => {
    fetch.mockResponseOnce(JSON.stringify(testData))
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
