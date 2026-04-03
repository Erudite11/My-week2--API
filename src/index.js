const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const logger = require('./middleware/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

app.use('/user', userRoutes);

app.use((err, req, res, next) => {
  if (err.status === 400) {
    return res.status(400).json({ error: err.message || 'Bad Request' });
  }
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`My Week 2 API Server running on port ${PORT}`);
});