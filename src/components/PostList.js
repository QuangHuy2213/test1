import React, { useState, useEffect } from 'react';

// Tra cứu tên quận từ mã quận và mã tỉnh
const DistrictLabel = ({ cityCode, districtCode }) => {
  const [districtName, setDistrictName] = useState(`Mã ${districtCode}`);

  useEffect(() => {
    if (!cityCode) return;
    fetch(`https://nguyenducquanghuy-backend.onrender.com/api/districts/${cityCode}`)
      .then(res => res.json())
      .then(data => {
        // Tìm quận có mã tương ứng trong danh sách
        const found = data.find(d => String(d.code) === String(districtCode));
        if (found) setDistrictName(found.name_with_type);
      })
      .catch(err => console.error(err));
  }, [cityCode, districtCode]);

  return <span>{districtName}</span>;
};


const PostList = () => {
  // 1. State lưu dữ liệu từ API
  const [cities, setCities] = useState([]);
  const [availableDistricts, setAvailableDistricts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  // 2. State lưu lựa chọn của người dùng
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  // 3. Lấy danh sách thành phố khi vừa load trang
  useEffect(() => {
    fetch('https://nguyenducquanghuy-backend.onrender.com/api/cities')
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(err => console.error(err));
  }, []);

  // 4. Gọi API lấy Quận/Huyện khi Tỉnh/Thành phố thay đổi
  useEffect(() => {
    if (selectedCity) {
      fetch(`https://nguyenducquanghuy-backend.onrender.com/api/districts/${selectedCity}`)
        .then(res => res.json())
        .then(data => setAvailableDistricts(data))
        .catch(err => console.error(err));
    } else {
      setAvailableDistricts([]);
    }
  }, [selectedCity]);

  // 5. Gọi API lấy TẤT CẢ bài viết ngay khi vừa load trang
  useEffect(() => {
    fetch('https://nguyenducquanghuy-backend.onrender.com/api/posts')
      .then(res => res.json())
      .then(data => setFilteredPosts(data))
      .catch(err => console.error(err));
  }, []);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict(''); 
  };

  // 6. Hàm gọi API lọc tin (ĐÃ SỬA: Đổi city_code thành city cho khớp với Database)
  const handleFilter = () => {
    let url = new URL('https://nguyenducquanghuy-backend.onrender.com/api/posts');
    
    if (selectedCity) url.searchParams.append('city', selectedCity);
    if (selectedDistrict) url.searchParams.append('district', selectedDistrict);
    
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-');
      url.searchParams.append('min_price', min);
      if (max) url.searchParams.append('max_price', max);
    }

    if (selectedArea) {
      const [min, max] = selectedArea.split('-');
      url.searchParams.append('min_area', min);
      if (max) url.searchParams.append('max_area', max);
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setFilteredPosts(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="post-list-container">
      {/* Bộ lọc tìm kiếm */}
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
            <option value="5000000-">Trên 5 triệu</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diện tích</label>
          <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
            <option value="">Chọn diện tích</option>
            <option value="0-20">Dưới 20 m²</option>
            <option value="20-30">20 m² - 30 m²</option>
            <option value="30-50">30 m² - 50 m²</option>
            <option value="50-">Trên 50 m²</option>
          </select>
        </div>

        <button className="btn-filter" onClick={handleFilter}>Lọc tin</button>
      </div>

      {/* Danh sách bài viết */}
      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const cityObj = cities.find(c => c.code === post.city);
            const cityName = cityObj ? cityObj.name_with_type : `Mã tỉnh ${post.city}`;

            return (
              <div className="post-item" key={index}>
                <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
                <div className="post-info">
                  <h3 className="post-title">{post.title}</h3>
                  {/* ĐÃ SỬA: Giá tiền chia cho 1 triệu */}
                  <div className="post-price">{post.price / 1000000} triệu/tháng</div>
                  <div className="post-meta">
                    <strong>Diện tích:</strong> {post.area}m² &nbsp;&nbsp;&nbsp; 
                    {/* ĐÃ SỬA: Dùng component DistrictLabel để dịch mã ra Tên Quận */}
                    <strong>Khu vực:</strong> <DistrictLabel cityCode={post.city} districtCode={post.district} />, {cityName}
                  </div>
                  <p className="post-content">{post.content}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ padding: '20px', textAlign: 'center' }}>Không tìm thấy bài viết nào.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;