import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Chart extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  };

  render() {
    return (
      <div className='chart'>
        <Bar
          data={this.props.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities in ${this.props.location}`,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.props.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities in ${this.props.location}`,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.props.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Largest Cities in ${this.props.location}`,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
