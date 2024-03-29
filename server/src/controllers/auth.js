const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Import the crypto module for SHA-256
const User = require('../models/User');

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

module.exports = { register, login };
