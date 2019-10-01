import React, { Component } from 'react';
import fakeData from '../data/fakeCoinDeskData.json';
import Canvas from './components/Canvas.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  parseMonth(date) {
    var fullDate = new Date(date);
    var options = { month: 'long'};
    return new Intl.DateTimeFormat('en-US', options).format(fullDate)
  }

  render() {
    console.log(this.parseMonth(fakeData[0].time.updated))
    console.log(fakeData);
    return (
      <div>
        <Canvas/>
      </div>
    )
  }
}
