import React, { Component } from 'react';
import fakeData from '../data/fakeCoinDeskData.json';
import Canvas from './components/Canvas.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(fakeData);
    return (
      <div>
        <Canvas/>
      </div>
    )
  }
}
