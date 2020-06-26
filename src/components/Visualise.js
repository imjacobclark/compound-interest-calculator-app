import React from 'react';

import Typography from '@material-ui/core/Typography';

import { Line } from 'react-chartjs-2';

export default function Visualise ({data}) {
  const years = [...data.history.map(dataPoint => dataPoint.year), data.history.length + 1]
  const values = [...data.history.map(dataPoint => dataPoint.value), data.value]

  const graphData = {
    labels: years,
    datasets: [
      {
        label: 'Compound growth over time',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values
      }
    ]
  }

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Years"
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Currency"
        }
      }]
    }
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>Visualisation</Typography>
      <Line
        data={graphData}
        width={80}
        height={250}
        options={chartOptions}
      />
    </div>
  );
}