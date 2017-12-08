import React, { Component } from 'react'
import rd3 from 'react-d3'

// import Buttons from './Buttons'
// import YearRange from './YearRange'

/* global fetch */
const BarChart = rd3.BarChart

const barData = [
  { label: 'A', value: 5 },
  { label: 'B', value: 6 },
  { label: 'F', value: 7 }
]

const SERVER_ROOT = 'http://localhost:3000/'
const USER_PATH1 = `${SERVER_ROOT}countries/it/indicators/NY.GDP.MKTP.CD?format=json&per_page=500&date=1975:2015`

export default class ChartVis extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentWillMount () {
    fetch(`${USER_PATH1}`)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data[1].map(function (datapoint, i) {
          return {
            'id': datapoint.country.id,
            'year': datapoint.date,
            'value': datapoint.value
          }
        })
        this.setState({ data: filteredData }) // TODO: Check the JSON response object.
      })
      .catch(error => console.log(error))
  }

  render () {
    // call js functions here
    console.log(this.state.data)
    return (
    // chart id is for SVG
      <section className='all_container'>

        {/* <div className='container'>
          <div id='chart' />
          <div id='slider' />
          <p id='range-label' />
        </div> */}

        <BarChart
          data={barData}
          width={500}
          height={200}
          fill={'#3182bd'}
          title='Bar Chart'
        />

      </section>

    )
  }
}
