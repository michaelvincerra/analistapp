import React, { Component } from 'react'
import './App.css' //
import SliderBar from './SliderBar'
/* global fetch */

/*
TODO:
Add separate countries
Add pie chart
Select new color for chart
Check to see if chart can use negative values.
*/

const style = { width: 800, margin: 50 }
const hljs = require('highlight.js')
const rd3 = require('rd3')
const BarChart = rd3.BarChart

hljs.initHighlightingOnLoad()

const MIN_YEAR = 1996
const SERVER_ROOT = 'http://localhost:3000/'
const IT = `${SERVER_ROOT}countries/it/indicators/`

const INDICATOR = {
  GDP: 'NY.GDP.MKTP.CD?',
  FDI: 'BN.KLT.DINV.CD?',
  GNI: 'NY.GNP.ATLS.CD?',
  IP: 'BX.GSR.ROYL.CD?'

}

export default class ChartVis extends Component {
  constructor (props) {
    super(props)

    this.state = {
      indicator: 'GDP',
      data: undefined,
      years: [1996, 2016]

    }
    this.fetchData = this.fetchData.bind(this)
    this.onSliderChange = this.onSliderChange.bind(this)
  }

  componentWillMount () {
    this.fetchData()
  }

  fetchData () {
    fetch(`${IT}${INDICATOR[this.state.indicator]}format=json&per_page=500&date=${this.state.years[0]}:${this.state.years[1]}`)
      .then((response) => response.json())
      .then((data) => {
        this.parseData(data)
        // console.log(data);
      })
      .catch(error => console.log(error))
  }

  parseData (data) {
    const filteredData = [
      {
        name: data[1][0].country.id,
        values: []
      }
    ]
    const plotData = data[1].map(function (datapoint, i) {
      return {
        'x': datapoint.date,
        'y': datapoint.value
      }
    })
    filteredData[0].values = plotData.reverse()
    this.setState({ data: filteredData })
  }

  renderData () {
    if (this.state.data === undefined) {
      return
    }
    console.log('Data loaded!')

    return (

      <div id='barChart'>
        <BarChart
          data={this.state.data}
          width={700}
          height={432}
          // title={'Italy'}
          yAxisLabel='&nbsp;&nbsp;&nbsp; Trillions'
          xAxisLabel='Italy'
        />
      </div>)
  }

  onSliderChange (value) {
    const top = value[1] > 100 ? 99 : value[1]
    const years = [ Math.floor(value[0] / 5) + MIN_YEAR, Math.floor(top / 5) + MIN_YEAR ]
    this.setState({years}, () => { this.fetchData() })
  }

  changeIndicator (value) {
    this.setState({indicator: value}, () => { this.fetchData() })
  }

  render () {
    return (
      <section className='all_container' >

        <div className='wrapper1'>

          <h1 className='one center '>AnalistApp</h1>
          {/* <div className='one-and'> Italy</div> */}
          <div className='two'>
            {this.renderData()}
          </div>
          <div className='three' style={style}>
            <div id='sliderBar'>
              <SliderBar onSliderChange={this.onSliderChange}
              />
            </div>
            <br />
            <br />

            <div className='indicators '>
              <button className='button' onClick={() => { this.changeIndicator('GDP') }}>GDP</button>
              <button className='button' onClick={() => { this.changeIndicator('FDI') }} disabled>FDI</button>
              <button className='button' onClick={() => { this.changeIndicator('GNI') }}>GNI</button>
              <button className='button' onClick={() => { this.changeIndicator('IP') }}disabled>IP</button>
            </div>

          </div>
        </div>

      </section>
    )
  }
};
