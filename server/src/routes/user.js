const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
    console.log("User:", req.user.username);
  res.json({ message: `${req.user.username}` });
});

module.exports = router;