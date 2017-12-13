import React, { Component } from 'react'
/* global fetch */

// import './App.css'

// const React = require('react');
// const ReactDOM = require('react-dom');
// const d3 = require('d3');
// const createReactClass = require('create-react-class');
const hljs = require('highlight.js')
const rd3 = require('rd3')
// const reactSlider = require('react-slider')

const BarChart = rd3.BarChart
// const LineChart = rd3.LineChart;
// const CandlestickChart = rd3.CandlestickChart;
// const PieChart = rd3.PieChart;
// const AreaChart = rd3.AreaChart;
// const Treemap = rd3.Treemap;
// const ScatterChart = rd3.ScatterChart;

hljs.initHighlightingOnLoad()

const SERVER_ROOT = 'http://localhost:3000/'
const IT_GDP = `${SERVER_ROOT}countries/it/indicators/NY.GDP.MKTP.CD?format=json&per_page=500&date=1995:2016`
// const IT_GNI = `${SERVER_ROOT}countries/it/indicators/NY.GDP.MKTP.CD?format=json&per_page=500&date=1995:2016`
// const IT_FDI = `${SERVER_ROOT}countries/it/indicators/BN.KLT.DINV.CD?format=json&per_page=500&date=1995:2015`

export default class RD3 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: undefined
    }

    // Use this if other components need to call this bound state
    this.fetchData = this.fetchData.bind(this)
  }

  // Keep lifecycle hook functions simple and clean
  componentWillMount () {
    this.fetchData()
  }

  fetchData () {
    fetch(`${IT_GDP}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
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
        console.log(filteredData)
        this.setState({ data: filteredData }) // TODO: Check the JSON response object.
      })
      .catch(error => console.log(error))
  }

  renderData () {
  // Following if statement used when state moved to App.js; All children receive  props of parent state.
  // if(!this.props.data === undefined) {
  // return statement exits function if data is undefined.
  //   return
  // }

    if (this.state.data === undefined) {
      return
    }
    return (
      <div className='col-md-6'>
        <BarChart
          data={this.state.data}
          width={700}
          height={432}
          title='GDP in Italy'
          yAxisLabel='Trillions'
          xAxisLabel='Year'
        />
      </div>)
  }

  getInitialState () {
    return {
    }
  }

  render () {
    // const barData = [
    //   {
    //     name: 'Series A',
    //     values: [
    //       { x: 1, y: 91 },
    //       { x: 2, y: 290 },
    //       { x: 3, y: -25 },
    //     ]
    //   },
    //   {
    //     name: 'Series B',
    //     values: [
    //       { x: 1, y: 9 },
    //       { x: 2, y: 49 },
    //       { x: 3, y: -20 },
    //     ]
    //   },
    //   {
    //     name: 'Series C',
    //     values: [
    //       { x: 1, y: 14 },
    //       { x: 2, y: 77 },
    //       { x: 3, y: -70 },
    //     ]
    // }
    // ];

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
