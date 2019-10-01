import React, { Component } from 'react';
import fakeData from '../data/fakeCoinDeskData.json';
import Canvas from './components/Canvas.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: null,
      days: null,
    }
  }

  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close?start=2019-09-01&end=2019-09-28')
    .then(res => {
      this.setParsedRatesAndDays(res.data.bpi);
    })
  }

  parseDay(date) {
    var fullDate = new Date(date);
    return fullDate.getUTCDate();
  }

  parseRate(rate) {
    return Math.floor(rate);
  }

  setParsedRatesAndDays(data) {
    var rates = [];
    var days = [];

    for (let day in data) {
      days.push(this.parseDay(day));
      rates.push(this.parseRate(data[day]));
    }

    this.setState({
      rates,
      days
    })
  }

  render() {
    return (
      <div>
        {this.state.days ? <Canvas rates={this.state.rates} days={this.state.days}/> : null}
      </div>
    )
  }
}
