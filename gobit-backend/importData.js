console.log("TEST: File đã thực sự chạy!");``
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

// Kết nối với PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Hàm đọc file JSON
const readJsonFile = (filename) => {
  const filePath = path.join(__dirname, 'data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const importData = async () => {
  try {
    console.log('Bắt đầu import dữ liệu...');

    // 1. Import Tỉnh/Thành phố
    const citiesData = readJsonFile('tinh_tp.json');
    for (const key in citiesData) {
      const city = citiesData[key];
      await pool.query(
        'INSERT INTO cities (code, name, slug, type, name_with_type) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (code) DO NOTHING',
        [city.code, city.name, city.slug, city.type, city.name_with_type]
      );
    }
    console.log('Import Tỉnh/Thành phố thành công!');

    // 2. Import Quận/Huyện
    const districtsData = readJsonFile('quan_huyen.json');
    for (const key in districtsData) {
      const district = districtsData[key];
      await pool.query(
        'INSERT INTO districts (code, name, type, slug, name_with_type, path, path_with_type, parent_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (code) DO NOTHING',
        [district.code, district.name, district.type, district.slug, district.name_with_type, district.path, district.path_with_type, district.parent_code]
      );
    }
    console.log('Import Quận/Huyện thành công!');

    // 3. Import Bài viết (Posts)
    const postsData = readJsonFile('data.json');
    for (const post of postsData) {
      await pool.query(
        'INSERT INTO posts (title, thumbnail, price, area, city, district, content) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [post.title, post.thumbnail, post.price, post.area, post.city, post.district, post.content]
      );
    }
    console.log('Import Bài viết thành công!');

  } catch (error) {
    console.error('Lỗi trong quá trình import:', error);
  } finally {
    pool.end(); // Đóng kết nối database
  }
};

importData();