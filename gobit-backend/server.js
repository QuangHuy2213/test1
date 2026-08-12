require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// 1. Import 2 thư viện Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

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

// ==========================================
// 2. CẤU HÌNH SWAGGER
// ==========================================
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Tài liệu API Dự án',
      version: '1.0.0',
      description: 'Giao diện test API Backend bằng Swagger',
    },
    servers: [
      {
        url: 'https://nguyenducquanghuy-backend.onrender.com',
        description: 'Server Render (Production)'
      },
      {
        url: 'http://localhost:5000',
        description: 'Server Local'
      }
    ],
  },
  // Khai báo file chứa code để Swagger tự động đọc các comment bên dưới
  apis: ['./server.js', './index.js', './*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Tạo đường dẫn /api-docs để hiển thị giao diện Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// ==========================================
// 3. CÁC API CỦA BẠN (Đã thêm chú thích Swagger)
// ==========================================

/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Lấy danh sách tất cả Tỉnh/Thành phố
 *     tags: [Khu vực]
 *     responses:
 *       200:
 *         description: Trả về mảng chứa danh sách tỉnh thành
 */
app.get('/api/cities', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cities');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * @swagger
 * /api/districts/{cityCode}:
 *   get:
 *     summary: Lấy danh sách Quận/Huyện theo Mã Tỉnh
 *     tags: [Khu vực]
 *     parameters:
 *       - in: path
 *         name: cityCode
 *         required: true
 *         schema:
 *           type: string
 *         description: Mã của tỉnh/thành phố (Ví dụ 79 là TP.HCM, 01 là Hà Nội)
 *     responses:
 *       200:
 *         description: Trả về mảng chứa danh sách quận huyện
 */
app.get('/api/districts/:cityCode', async (req, res) => {
  try {
    const { cityCode } = req.params;
    const result = await pool.query('SELECT * FROM districts WHERE parent_code = $1', [cityCode]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lấy danh sách bài viết (Có hỗ trợ bộ lọc)
 *     tags: [Bài viết]
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Mã tỉnh/thành phố (Ví dụ 79)
 *       - in: query
 *         name: district
 *         schema:
 *           type: string
 *         description: Mã quận/huyện
 *       - in: query
 *         name: min_price
 *         schema:
 *           type: integer
 *         description: Giá thấp nhất (VND)
 *       - in: query
 *         name: max_price
 *         schema:
 *           type: integer
 *         description: Giá cao nhất (VND)
 *       - in: query
 *         name: min_area
 *         schema:
 *           type: integer
 *         description: Diện tích nhỏ nhất (m2)
 *       - in: query
 *         name: max_area
 *         schema:
 *           type: integer
 *         description: Diện tích lớn nhất (m2)
 *     responses:
 *       200:
 *         description: Trả về mảng bài viết khớp với bộ lọc
 */
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
  console.log(`Xem tài liệu Swagger API tại đường dẫn: /api-docs`);
});