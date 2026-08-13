"use client";

import React, { useState, useEffect } from 'react';
import './PostList.css'; // Import CSS cho component PostList                                       

// 1. KHAI BÁO CÁC INTERFACE (BẢN THIẾT KẾ DỮ LIỆU)
interface City {
  code: string;
  name: string;
  name_with_type: string;
}

interface District {
  code: string;
  name: string;
  name_with_type: string;
  parent_code: string;
}

interface Post {
  id?: number | string;
  title: string;
  price: number;
  area: number;
  city: string;
  district: string;
  thumbnail: string;
  content: string;
}

interface DistrictLabelProps {
  cityCode: string | number;
  districtCode: string | number;
}

// 2. COMPONENT DISTRICT LABEL
const DistrictLabel: React.FC<DistrictLabelProps> = ({ cityCode, districtCode }) => {
  const [districtName, setDistrictName] = useState<string>(`Mã ${districtCode}`);

  useEffect(() => {
    if (!cityCode) return;
    fetch(`/api/districts/${cityCode}`)
      .then(res => res.json())
      .then((data) => {
        // Lớp bảo vệ chống lỗi .find()
        let districts = [];
        if (Array.isArray(data)) {
          districts = data;
        } else if (data && Array.isArray(data.data)) {
          districts = data.data;
        } else {
          console.error(`DistrictLabel - Dữ liệu không hợp lệ cho mã tỉnh ${cityCode}:`, data);
        }

        const found = districts.find((d: District) => String(d.code) === String(districtCode));
        if (found) setDistrictName(found.name_with_type);
      })
      .catch(err => console.error("Lỗi fetch DistrictLabel:", err));
  }, [cityCode, districtCode]);

  return <span>{districtName}</span>;
};


// 3. COMPONENT CHÍNH: POST LIST
const PostList: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [availableDistricts, setAvailableDistricts] = useState<District[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState<string>('');

  // 4. Lấy danh sách thành phố khi vừa load trang
  useEffect(() => {
    fetch('/api/cities')
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCities(data);
        } else if (data && Array.isArray(data.data)) {
          setCities(data.data);
        } else {
          console.error("Cities - Dữ liệu không phải là mảng:", data);
          setCities([]); 
        }
      })
      .catch(err => console.error("Lỗi gọi API Cities:", err));
  }, []);

  // 5. Gọi API lấy Quận/Huyện khi Tỉnh/Thành phố thay đổi
  useEffect(() => {
    if (selectedCity) {
      fetch(`/api/districts/${selectedCity}`)
        .then(res => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setAvailableDistricts(data);
          } else if (data && Array.isArray(data.data)) {
            setAvailableDistricts(data.data);
          } else {
            console.error("Districts - Dữ liệu không phải là mảng:", data);
            setAvailableDistricts([]);
          }
        })
        .catch(err => console.error("Lỗi gọi API Districts:", err));
    } else {
      setAvailableDistricts([]);
    }
  }, [selectedCity]);

  // 6. Gọi API lấy TẤT CẢ bài viết ngay khi vừa load trang
  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFilteredPosts(data);
        } else if (data && Array.isArray(data.data)) {
          setFilteredPosts(data.data);
        } else {
          console.error("Posts - Dữ liệu không phải là mảng:", data);
          setFilteredPosts([]);
        }
      })
      .catch(err => console.error("Lỗi gọi API Posts:", err));
  }, []);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict(''); 
  };

  // 7. Hàm gọi API lọc tin
  const handleFilter = () => {
    const params = new URLSearchParams();
    
    if (selectedCity) params.append('city', selectedCity);
    if (selectedDistrict) params.append('district', selectedDistrict);
    
    if (selectedPrice) {
      const [min, max] = selectedPrice.split('-');
      params.append('min_price', min);
      if (max) params.append('max_price', max);
    }

    if (selectedArea) {
      const [min, max] = selectedArea.split('-');
      params.append('min_area', min);
      if (max) params.append('max_area', max);
    }

    fetch(`/api/posts?${params.toString()}`)
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFilteredPosts(data);
        } else if (data && Array.isArray(data.data)) {
          setFilteredPosts(data.data);
        } else {
          console.error("Filter Posts - Dữ liệu không phải là mảng:", data);
          setFilteredPosts([]);
        }
      })
      .catch(err => console.error("Lỗi gọi API Filter Posts:", err));
  };

  // 8. Hàm làm mới bộ lọc
  const handleReset = () => {
    setSelectedCity('');
    setSelectedDistrict('');
    setSelectedPrice('');
    setSelectedArea('');

    fetch('/api/posts')
      .then(res => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setFilteredPosts(data);
        } else if (data && Array.isArray(data.data)) {
          setFilteredPosts(data.data);
        } else {
          console.error("Reset Posts - Dữ liệu không phải là mảng:", data);
          setFilteredPosts([]);
        }
      })
      .catch(err => console.error("Lỗi gọi API Reset Posts:", err));
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
          <select value={selectedDistrict} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDistrict(e.target.value)} disabled={!selectedCity}>
            <option value="">---Quận huyện---</option>
            {availableDistricts.map((district) => (
              <option key={district.code} value={district.code}>{district.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Khoảng giá</label>
          <select value={selectedPrice} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedPrice(e.target.value)}>
            <option value="">Chọn mức giá</option>
            <option value="0-1000000">Dưới 1 triệu</option>
            <option value="1000000-3000000">1 triệu - 3 triệu</option>
            <option value="3000000-5000000">3 triệu - 5 triệu</option>
            <option value="5000000-">Trên 5 triệu</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diện tích</label>
          <select value={selectedArea} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedArea(e.target.value)}>
            <option value="">Chọn diện tích</option>
            <option value="0-20">Dưới 20 m²</option>
            <option value="20-30">20 m² - 30 m²</option>
            <option value="30-50">30 m² - 50 m²</option>
            <option value="50-">Trên 50 m²</option>
          </select>
        </div>

        {/* Khung tìm kiếm giờ chỉ còn nút Lọc tin */}
        <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
          <button className="btn-filter" onClick={handleFilter}>Lọc tin</button>
        </div>
      </div>

      {/* Nút Làm mới được chuyển ra ngoài, nằm ở góc phải phía trên danh sách bài viết */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '15px 0 10px 0' }}>
        <button 
          className="btn-reset" 
          onClick={handleReset}
          style={{
            padding: '8px 16px',
            backgroundColor: '#ccc',
            color: '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Làm mới
        </button>
      </div>

      {/* Danh sách bài viết */}
      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const cityObj = cities.find(c => String(c.code) === String(post.city));
            const cityName = cityObj ? cityObj.name_with_type : `Mã tỉnh ${post.city}`;

            return (
              <div className="post-item" key={index}>
                <img src={post.thumbnail} alt={post.title} className="post-thumbnail" />
                <div className="post-info">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-price">{post.price / 1000000} triệu/tháng</div>
                  <div className="post-meta">
                    <strong>Diện tích:</strong> {post.area}m² &nbsp;&nbsp;&nbsp; 
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