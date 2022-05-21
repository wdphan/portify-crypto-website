import React from "react";
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'May',
    'Jun',
  ],
  datasets: [
    {
      fill: true,
      backgroundColor: '#010180',
      drawOnChartArea: false,
      display: false,
      lineTension: .5,
      backgroundColor: '#D3D3EB',
      borderColor: '#010180',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#010180',
      pointBackgroundColor: '#010180',
      pointBorderWidth: 1,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#010180',
      pointHoverBorderColor: '#010180',
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [3000, 3200, 3400, 3500, 3400, 3300, 3450, 3500, 3500, 3500, 3700, 3800, 3900, 3700, 3300, 3000, 2900, 2600, 2300],  
        },
  ],
}



const options = {
  plugins: {
    legend: {
      display: false,
    },
    
  },
}

const BalanceChart = () => {
  return (
      <Line data={data} options={options} width={400} height={200} />
  )
}

export default BalanceChart

