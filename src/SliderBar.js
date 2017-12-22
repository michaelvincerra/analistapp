import React, { Component } from 'react'
import './App.css' //
import './index.less'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Range = Slider.Range

export default class SliderBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: [0, 100]
    }
    this.onSliderChange = this.onSliderChange.bind(this)
  }

  onSliderChange (value) {
    console.log(value)
    this.setState({value}, () => {
      this.props.onSliderChange(this.state.value)
    }

    )
  }

  render () {
    return (
      <div>
        <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
      </div>
    )
  }
}
