import React, { Component } from 'react'

import { ProgressBar } from 'scrolling-based-progressbar';

class Example extends Component {
  render () {
    return (
      <ProgressBar />
      or
      <ProgressBar height="4px" color="#1976d2" bgColor="#a7caed" />
    )
  }
}
