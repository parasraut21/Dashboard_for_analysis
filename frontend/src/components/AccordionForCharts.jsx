import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';

const ChartButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 focus:outline-none focus:ring focus:border-blue-300 transition"
  >
    {children}
  </button>
);

const AccordionForCharts = ({ data }) => {
  const [selectedChart, setSelectedChart] = useState(null);

  const showChart = (chart) => {
    setSelectedChart(chart);
  };

  const ChartComponent = () => {
    switch (selectedChart) {
      case 'polar':
        return <PolarChart serverData={data} />;
      case 'doughnut':
        return <DoughnutChart serverData={data} />;
      case 'bar':
        return <BarChart serverData={data} />;
      case 'line':
        return <LineChart serverData={data} />;
      case 'radar':
        return <RadarChart serverData={data} />;
      case 'pie':
        return <PieChart serverData={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="flex space-x-4">
        <ChartButton onClick={() => showChart('polar')}>Polar Chart</ChartButton>
        <ChartButton onClick={() => showChart('doughnut')}>Doughnut Chart</ChartButton>
        <ChartButton onClick={() => showChart('bar')}>Bar Chart</ChartButton>
        <ChartButton onClick={() => showChart('line')}>Line Chart</ChartButton>
        <ChartButton onClick={() => showChart('radar')}>Radar Chart</ChartButton>
        <ChartButton onClick={() => showChart('pie')}>Pie Chart</ChartButton>
      </div>

      {selectedChart && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="my-8 p-8 rounded-md shadow-md bg-white w-full max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">{`Selected ${selectedChart} Chart`}</h2>
          <div className="flex justify-center">
            <ChartComponent />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default AccordionForCharts;
