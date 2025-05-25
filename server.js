const express = require('express');
const expressConfig = require('./configs/expressConfig');
const dbConfig = require('./configs/dbConfig');

const port = 3000;

startServer();
async function startServer() {
  const app = express();

  await dbConfig(app)
  expressConfig(app);

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}