require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// 1. Import file json swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

// Thiết lập kết nối PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 2. Kích hoạt giao diện Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// 3. API CODE 


// API 1: Lấy danh sách Tỉnh/Thành phố
app.get('/api/cities', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cities');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 2: Lấy danh sách Quận/Huyện theo Tỉnh
app.get('/api/districts/:cityCode', async (req, res) => {
  try {
    const { cityCode } = req.params;
    const result = await pool.query('SELECT * FROM districts WHERE parent_code = $1', [cityCode]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API 3: Lấy danh sách bài viết
app.get('/api/posts', async (req, res) => {
  try {
    const { city, district, min_price, max_price, min_area, max_area } = req.query;
    
    let query = 'SELECT * FROM posts WHERE 1=1';
    let queryParams = [];
    let paramIndex = 1;

    if (city) {
      query += ` AND city = $${paramIndex++}`;
      queryParams.push(city);
    }
    if (district) {
      query += ` AND district = $${paramIndex++}`;
      queryParams.push(district);
    }
    if (min_price) {
      query += ` AND price >= $${paramIndex++}`;
      queryParams.push(min_price);
    }
    if (max_price) {
      query += ` AND price <= $${paramIndex++}`;
      queryParams.push(max_price);
    }
    if (min_area) {
      query += ` AND area >= $${paramIndex++}`;
      queryParams.push(min_area);
    }
    if (max_area) {
      query += ` AND area <= $${paramIndex++}`;
      queryParams.push(max_area);
    }

    const result = await pool.query(query, queryParams);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Backend đang chạy tại cổng ${PORT}`);
  console.log(`Xem tài liệu API tại: http://localhost:${PORT}/api-docs`);
});