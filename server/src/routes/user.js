const express = require('express');
const { authenticate } = require('../middleware/auth');
const { addQuestion } = require('../controllers/user');

const router = express.Router();

router.get('/profile', authenticate, (req, res) => {
    console.log("User:", req.user.username);
  res.json({ message: `${req.user.username}` });
});

router.post('/addQ', addQuestion,  (req, res) => {
res.json({ message: `Questions added successfully` });
});

module.exports = router;