import React from 'react';
import PostList from './components/PostList';
import CandlestickChart from './components/CandlestickChart';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h2 className="main-title">ĐỀ TEST FRONT-END DEVELOPER</h2>
      
      <div className="task-section">
        <h3 className="task-title">Bài 1: Danh sách bài viết & Tìm kiếm </h3>
        <PostList />
      </div>

      <div className="task-section">
        <h3 className="task-title">Bài 2: Biểu đồ nến - Candlestick Chart</h3>
        <CandlestickChart />
      </div>
    </div>
  );
}

export default App;