import React, { Component } from 'react'
import ChartVis from './ChartVis'
import './App.css' // This Styles import statement governs the entire app

class App extends Component {
  render () {
    return (

      <ChartVis />

    )
  }
}

export default App

// TODO: Transfer fetchData() function, and API calls, to appear above render() above.
// This will mean that App.js holds all state. Therefore, inside RD3, change all
// references from {this.state.data} to {this.props.data}.
// The child component must use 'props' if the parent holds state.
// TODO: Move below items up after return statement.
// <div>
// <RD3 data={this.state.barData}/>
// <pieChart data={this.state.pieChart}/>
// </div>
//
