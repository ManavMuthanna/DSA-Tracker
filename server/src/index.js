const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const cors = require('cors');
const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Allow requests from frontend
const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});