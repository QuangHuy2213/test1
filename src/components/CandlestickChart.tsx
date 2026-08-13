"use client";
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Import bộ kiểu dữ liệu chuẩn của ApexCharts

// Khai báo Component dưới dạng React.FC (Function Component)
const CandlestickChart: React.FC = () => {
  // Dữ liệu mẫu (open, high, low, close)
  const seriesData = [
    {
      data: [
        { x: new Date('2026-01-01').getTime(), y: [120, 135, 115, 130] },
        { x: new Date('2026-01-02').getTime(), y: [130, 145, 125, 140] },
        { x: new Date('2026-01-03').getTime(), y: [140, 150, 132, 135] },
        { x: new Date('2026-01-04').getTime(), y: [135, 142, 120, 125] },
      ],
    },
  ];

  // Gắn kiểu ApexOptions để TypeScript tự động gợi ý code và kiểm tra lỗi
  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 400,
    },
    title: {
      text: 'Candlestick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd MMM yyyy', // Định dạng lại ngày
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746', // Giá tăng (Xanh)
          downward: '#EF403C', // Giá giảm (Đỏ)
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Chart 
        options={options} 
        series={seriesData} 
        type="candlestick" 
        height={400} 
      />
    </div>
  );
};

export default CandlestickChart;