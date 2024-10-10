
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/linkmaster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample User Model
const UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  skills: [String],
});
const User = mongoose.model('User', UserSchema);

// Sample Job Model
const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
});
const Job = mongoose.model('Job', JobSchema);

// Sample API endpoints
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
