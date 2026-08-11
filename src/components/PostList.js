import React , { useState, useMemo } from 'react';
import tinhtpData from '../data/tinh_tp.json';
import quanhuyenData from '../data/quan_huyen.json';
import baidangData from '../data/data.json';

const PostList = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedPrice , setSelectedPrice] = useState('');
    const [selectedArea , setSelectedArea] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(baidangData);

    // lay danh sach tp
    const cities = Object.values(tinhtpData);

    // lay danh sach quan huyen theo tp
    const availableDistricts = useMemo(() => {
        if (!selectedCity) return [];
        return Object.values(quanhuyenData).filter(
            (district) => district.parent_code === selectedCity 
        );

    }, [selectedCity]);

    // xu li su kien khi thay doi tp
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        setSelectedDistrict(''); // lam moi lua chon quan khi thay doi tp
    };

    // ham loc tin
    const handleFilter = () => {
        let results = baidangData;

        if (selectedCity) {
            results = results.filter((post) => post.city === selectedCity);
        }

        if (selectedDistrict) {
            results = results.filter((post) => post.district === selectedDistrict);
        }

        if (selectedPrice) {
            const [min , max] = selectedPrice.split('-').map(Number);
            results = results.filter((post) => max ? (post.price >= min && post.price <= max) : (post.price >= min));
        }

        if (selectedArea) {
            const [min , max] = selectedArea.split('-').map(Number);
            results = results.filter((post) => max ? (post.area >= min && post.area <= max) : (post.area >= min));
        }

        setFilteredPosts(results);
    };
    return (
    <div className="post-list-container">
      {/* loc tim kiem */}
      <div className="search-bar">
        <div className="form-group">
          <label>Tỉnh thành</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">---Tỉnh thành---</option>
            {cities.map((city) => (
              <option key={city.code} value={city.code}>{city.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Quận huyện</label>
          <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} disabled={!selectedCity}>
            <option value="">---Quận huyện---</option>
            {availableDistricts.map((district) => (
              <option key={district.code} value={district.code}>{district.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Khoảng giá</label>
          <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
            <option value="">Chọn mức giá</option>
            <option value="0-1000000">Dưới 1 triệu</option>
            <option value="1000000-3000000">1 triệu - 3 triệu</option>
            <option value="3000000-5000000">3 triệu - 5 triệu</option>
            <option value="5000000-999999999">Trên 5 triệu</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diện tích</label>
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="">Chọn diện tích</option>
            <option value="0-20">Dưới 20 m²</option>
            <option value="20-30">20 m² - 30 m²</option>
            <option value="30-50">30 m² - 50 m²</option>
            <option value="50-999">Trên 50 m²</option>
          </select>
        </div>

        <button className="btn-filter" onClick={handleFilter}>Lọc tin</button>
      </div>

      {/* danh sach bai viet*/}
      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const cityName = tinhtpData[post.city]?.name_with_type || '';
            const districtName = quanhuyenData[post.district]?.name_with_type || '';

            return (
              <div className="post-item" key={index}>
                <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
                <div className="post-info">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-price">{post.price} triệu/tháng</div>
                  <div className="post-meta">
                    <strong>Diện tích:</strong> {post.area}m² &nbsp;&nbsp;&nbsp; 
                    <strong>Khu vực:</strong> {districtName}, {cityName}
                  </div>
                  <p className="post-content">{post.content}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ padding: '20px', textAlign: 'center' }}>Không tìm thấy bài viết nào phù hợp với bộ lọc.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;