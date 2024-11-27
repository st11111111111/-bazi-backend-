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
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// 测试路由
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '后端API正常工作',
    timestamp: new Date().toISOString()
  });
});

// 使用路由
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
}); 