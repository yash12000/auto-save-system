const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Auto-Saving API is running 🚀');
});

app.use('/blackrock/challenge/v1', routes);

module.exports = app;