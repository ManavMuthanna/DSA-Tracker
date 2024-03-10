const express = require('express');
const { getQuestions } = require('../controllers/question');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    // Call the getQuestions function to retrieve data from the database
    const questions = await getQuestions();

    // Return the data as JSON
    res.json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
