import React, { Component } from 'react';
import Chart from "chart.js";


export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { rates, days } = this.props;
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: days,
        datasets: [
          {
            label: "Sales",
            data: rates,
            fill: false
          }
        ]
      },
      options: {
      }
    });
  }

  render() {
    return (
      <div id="canvas-wrapper">
      <canvas
          id="myChart"
          ref={this.chartRef}
      />
      <p>Powered by CoinDesk</p>
  </div>
    )
  }
}