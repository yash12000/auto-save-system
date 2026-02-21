const app = require('./app');

const PORT = 5477;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});