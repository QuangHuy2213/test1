import PostList from '../components/PostList';
import CandlestickChart from '../components/CandlestickChart';
export default function Home() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* --- PHẦN TIÊU ĐỀ --- */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px', 
        padding: '20px 0', 
        borderBottom: '3px solid #f39c12' // Đường viền cam tone-sur-tone với bộ lọc
      }}>
        <h1 style={{ 
          color: '#2c3e50', // Màu xanh đen sang trọng
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          margin: '0',
          textTransform: 'uppercase'
        }}>
          Kênh Thông Tin Phòng Trọ & Căn Hộ
        </h1>
        <p style={{ 
          color: '#7f8c8d', 
          fontSize: '1.1rem', 
          marginTop: '10px' 
        }}>
          Tìm kiếm chỗ ở ưng ý nhanh chóng, dễ dàng và chính xác nhất
        </p>
      </div>

      {/* --- DANH SÁCH BÀI VIẾT & BỘ LỌC --- */}
      <PostList />
      <br />
      <div style={{ marginBottom: '40px' }}>
        <CandlestickChart />
      </div>
    </main>
  );
}