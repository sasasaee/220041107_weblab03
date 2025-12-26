const express = require('express');
require('dotenv').config();
const mongoose = require('./db'); // import MongoDB connection
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a simple User model
//const User = mongoose.model('User', { name: String, age: Number });
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/trainers', require('./routes/trainerRoutes'));
app.use('/api/schedules', require('./routes/scheduledWorkoutRoutes'));


// Hello World route
//app.get('/', (req, res) => {
  //res.send('Hello, World!');
//});
app.get('/', (req, res) => {
  res.send('Gym management system api');
});



// POST route to add a new user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body); // expects { "name": "Alice", "age": 25 }
//     await user.save();
//     res.json({ message: 'User added!', user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET route to fetch all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Start the server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
