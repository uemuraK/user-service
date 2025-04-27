const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the User Management Service!');
});

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});