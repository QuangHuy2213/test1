import React from 'react';
import Chart from 'react-apexcharts';

const CandlestickChart = () => {
  // du lieu mau (open , high , low , close)
  const seriesData = [{
    data: [
      { x: new Date('2026-01-01').getTime(), y: [120, 135, 115, 130] },
      { x: new Date('2026-01-02').getTime(), y: [130, 145, 125, 140] },
      { x: new Date('2026-01-03').getTime(), y: [140, 150, 132, 135] },
      { x: new Date('2026-01-04').getTime(), y: [135, 142, 120, 125] },
  ], }];

  const options = {
    chart: { 
      type: 'candlestick', 
      height: 400 
    },
    title: { 
      text: 'Candlestick Chart', 
      align: 'left' 
    },
    xaxis: { 
      type: 'datetime',
      labels: {
        format: 'dd MMM yyyy',} // dinh dang lai ngay
    },
    yaxis: { 
      tooltip: { enabled: true } 
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746', // tang
          downward: '#EF403C' // giam
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Chart options={options} series={seriesData} type="candlestick" height={400} />
    </div>
  );
};

export default CandlestickChart;