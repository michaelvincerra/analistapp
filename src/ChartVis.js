import React, { Component } from 'react'
/* global fetch */

const hljs = require('highlight.js')
const rd3 = require('rd3')
// const reactSlider = require('react-slider')

const BarChart = rd3.BarChart

hljs.initHighlightingOnLoad()

const SERVER_ROOT = 'http://localhost:3000/'
const IT_GDP = `${SERVER_ROOT}countries/it/indicators/NY.GDP.MKTP.CD?format=json&per_page=500&date=1995:2016`

export default class ChartVis extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: undefined
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentWillMount () {
    this.fetchData()
  }

  fetchData () {
    fetch(`${IT_GDP}`)
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
    // console.log(filteredData)
    this.setState({ data: filteredData })
  }

  renderData () {
    if (this.state.data === undefined) {
      return
    }
    return (
      <div id='barChart'>
        <BarChart
          data={this.state.data}
          // margins={{top: 100, right: 20, bottom: 40, left: 45}}
          width={700}
          height={432}
          title='GDP in Italy'
          yAxisLabel='Trillions'
          xAxisLabel='Year'
          rangeRoundBandsPadding={0.25}
          // axesColor={2f7c77}
        />
      </div>)
  }

  getInitialState () {
    return {
    }
  }

  render () {
    return (
      <section className='all_container' >

        <div className='wrapper1 outline'>

          <h1 className='one center outline'>AnalistApp</h1>

          <div className='two center outline'>
            {this.renderData()}
          </div>

          <div />

          {/* <ReactSlider defaultValue={[0, 100]} withBars /> */}

        </div>

      </section>
    )
  }
};
