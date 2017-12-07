import React, { Component } from 'react'
// import Buttons from './Buttons'
// import YearRange from './YearRange'


const SERVER_ROOT = 'http://api.worldbank.org/'
const USER_PATH1 = `${SERVER_ROOT}countries/it/indicators//NY.GDP.MKTP.CD?format=json&per_page=500&date=1995:2015`


export default class ChartVis extends Component {
    // 30.11.2017. Restart here. 
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentWillMount () {
        fetch(`${USER_PATH1}`)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data[1].map(function(datapoint,i) { 
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

    componentDidMount() {
        // This will call the d3 to show the chart 
    }

    d3_function() {
    }

    
    Italy_GDP_Chart(data) {    
    }

    render() {

        // call js functions here 
        console.log(this.state.data)
        return (
            // chart id is for SVG 
            <section className="all_container">

                <div className='container'>
                    <div id='chart'></div>
                    <div id='slider'></div>
                    <p id='range-label'></p>
                </div>

            </section>

        )
    }
}

