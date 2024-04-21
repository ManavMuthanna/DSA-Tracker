const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Import the crypto module for SHA-256
const User = require('../models/user');

// Register a new user
const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password using SHA-256
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex');

    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    console.log("User signed up!")
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the input password using SHA-256 for comparison
    const hashedInputPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex');

    // Compare the hashed input password with the stored hashed password
    if (hashedInputPassword !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    console.log("User logged in!")
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const addQuestion = async (req, res, next) => {
  const { username, questions } = req.body; // Assuming you send the username along with the question names

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming you send the question names in the request body as an array of strings
    if (!Array.isArray(questions)) {
      return res.status(400).json({ message: 'Questions should be provided as an array' });
    }

    // Assign the new array of questions to the user's questions field
    user.questions = questions;
    
    // Save the updated user document
    await user.save();

    res.json({ message: 'Questions updated successfully' });
  } catch (error) {
    next(error);
  }
};

const fetchQuestion = async (req, res, next) => {
  const { username } = req.params;
  
  try {
    const user = await User.findOne({ username });
    // Retrieve all questions from the MongoDB collection
    const questions = user.questions;
    
    res.json({ questions: questions });
  } catch (error) {
    console.error(error);
    return [];
  }
};



module.exports = { register, login, addQuestion, fetchQuestion };
