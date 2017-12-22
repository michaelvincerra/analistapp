
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChartVis from '../ChartVis'
import testData from './testData'
import fetch from 'jest-fetch-mock'
import Slider from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/rc-slider'

// const wrapper = mount(<BarChart />)

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
    wrapper = shallow(<ChartVis />)
    app = wrapper.instance()
  })

  it('Updates the state data when fetchData is called', () => {
    let stateData = wrapper.state()
    let expected = [

      { x: '1995', y: '1170787357066.44' },
      { x: '1996', y: '1308929305684.53' },
      { x: '1997', y: '1239050936221.01' },
      { x: '1998', y: '1266309223820.68' },
      { x: '1999', y: '1248563148945.24' },
      { x: '2000', y: '1141760021927.4' },
      { x: '2001', y: '1162317840447.43' },
      { x: '2002', y: '1266510668642.95' },
      { x: '2003', y: '1569649631715.58' },
      { x: '2004', y: '1798314755525.2' },
      { x: '2005', y: '1852661936077.6' },
      { x: '2006', y: '1942633841801.53' },
      { x: '2007', y: '2203053327128.39' },
      { x: '2008', y: '2390729210487.77' },
      { x: '2009', y: '2185160158794.11' },
      { x: '2010', y: '2125058270201.64' },
      { x: '2011', y: '2276292459232.78' },
      { x: '2012', y: '2072823111961.1' },
      { x: '2013', y: '2130491269673.44' },
      { x: '2014', y: '2151732834411.5' },
      { x: '2015', y: '1824902219021.73' },
      { x: '2016', y: '1849970464191.78' }
    ]
    expect(expected).toEqual(stateData.data[0].values)
  })
})

// it('renders a change of years on event onSliderChange', () => {
//   const event = {target: {value: value }}
//   app.find('#sliderBar').simulate('change', event)
//   const years = app.find('???')
//   expect(value.length).toBe(20)
// }
