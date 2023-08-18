import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartComponentProps {
  data: { label: string; value: number }[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Bar Chart',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
