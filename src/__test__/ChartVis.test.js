
// Create unittest that verifies that a small unit of data can be passed.
// Jest allows us to write unittests using Snapshot feature

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChartVis from '../ChartVis'
import testData from './testData'
import fetch from 'jest-fetch-mock'

Enzyme.configure({
  adapter: new Adapter()
})

/* globals jest beforeEach describe it expect */
window.fetch = fetch

describe('ChartVis', () => {
  let wrapper, app, callback

  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(testData))
    callback = jest.fn()
    // wrapper = shallow(<ChartVis click={callback} />)
    app = wrapper.instance()
  })

  it('displays a chart', () => {
    expect(wrapper.find('#barChart').exists()).toBe(true) // use for Boolean, number, string
  })

  it('when fetchData() is called, state is updated', () => {
    expect(wrapper.state()).toEqual({ data: [] })
    app.fetchData()
    expect(wrapper.state()).toEqual({ data: testData })
  })
})
// const filteredData = [
//   parseData(data) {
//     const filteredData = [
//       {
//         name: data[1][0].country.id,
//         values: []
//       }
//     ]
//   const plotData = data[1].map(function (datapoint, i) {
//       return {
//         'x': datapoint.date,
//         'y': datapoint.value
//       }
//     })
//   filteredData[0].values = plotData.reverse()
//   console.log(filteredData)
//   this.setState({ data: filteredData })
//   }
