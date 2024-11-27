const express = require('express');
const router = express.Router();

// 用户路由
router.get('/user', (req, res) => {
  res.json({ message: 'Get user successfully' });
});

module.exports = router; 