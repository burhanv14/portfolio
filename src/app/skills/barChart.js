'use client'

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 3,
      borderRadius : 10,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: true,
    },
  },
};

const labels =['DSA', 'C/C++', 'Java', 'HTML', 'CSS', 'Javascript','react.js','next.js','SQL','Kotlin'];


const data = {
  labels,
  datasets: [
    {
      data:['7','8','8','10','10','7','7','9','10','6'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
