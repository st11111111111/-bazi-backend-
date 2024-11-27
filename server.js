const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();

// CORS 配置
const corsOptions = {
  origin: [
    'https://v0-toberich-gnro3xop0s4-2dpm23eu2-heng9961-gmailcoms-projects.vercel.app',
    'https://v0-toberich-gnro3xop0s4.vercel.app',
    'http://localhost:3000'  // 本地开发用
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// 中间件
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB 连接
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bazhi';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败:', err));

// 测试路由
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '后端API正常工作',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
    mongoStatus: mongoose.connection.readyState === 1 ? '已连接' : '未连接'
  });
});

// 使用路由
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
}); 