const express = require('express');
const expressConfig = require('./configs/expressConfig');

const port = 3000;

startServer();
async function startServer() {
  const app = express();
  expressConfig(app);
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}