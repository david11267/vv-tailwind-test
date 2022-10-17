import React, { Component } from 'react'

export default class ScrollingText extends Component {
  render() {
    return (
        <marquee behaviour="scroll" direction="left">
            <h1>
                <a className='underline'>{this.props.text}</a>
            </h1>
      </marquee>
    )
  }
}
