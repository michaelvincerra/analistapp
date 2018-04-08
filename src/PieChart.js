
import React,{ PieChart } from "rd3";

/* For ChartVis server proxy is: http://api.worldbank.org/ */
/* For PieChart server proxy is: http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/  */
/* RETURN the PC_GDP for Italy for 1995: 2016 */
/* RETURN the PC_GDP for Italy  for 1 year. */ 
/* Determione the structure of the data.  Dictionaries! */ 


///////////////////
/*

const MIN_YEAR = 1996
const SERVER_ROOT = 'http://localhost:3000/'
const PC_GDP = `${SERVER_ROOT}tipsst10?precision=1&sectperf=TOTAL&unit=PC_GDP&groupedIndicators=1`



export default class PieChart extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // indicator: 'GDP',
      data: undefined,
    }
    this.fetchData = this.fetchData.bind(this)

    componentWillMount () {
      this.fetchData()
    }

*///////////

  
//     fetchData () {
//  //     fetch(`${PC_GDP}    //{this.state.years[0]}:${this.state.years[1]}`)  */ TODO: Start revisions here. 
// //

//         .then((response) => response.json())
//         .then((data) => {
//           this.parseData(data)
//           // console.log(data);
//         })
//         .catch(error => console.log(error))
//     }
  
//     parseData (data) {
//       const filteredData = [
//         {
//           name: data[1][0].country.id,
//           values: []
//         }
//       ]
//       const plotData = data[1].map(function (datapoint, i) {
//         return {
//           'x': datapoint.date,
//           'y': datapoint.value
//         }
//       })
//       filteredData[0].values = plotData.reverse()
//       this.setState({ data: filteredData })
//     }
  
//     renderData () {
//       if (this.state.data === undefined) {
//         return
//       }
//       console.log('Data loaded!')
  
      return (
  
        <div id='barChart'>
          <PieChart
            // data={this.state.data}
            // width={700}
            // height={432}
            // // title={'Italy'}
            // yAxisLabel='&nbsp;&nbsp;&nbsp; Trillions'
            // xAxisLabel='Italy'
          />
        </div>)
    }
  