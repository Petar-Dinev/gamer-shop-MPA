const express = require('express');
const expressConfig = require('./configs/expressConfig');
const dbConfig = require('./configs/dbConfig');
const routersConfig = require('./configs/routersConfig');

const port = 3000;

startServer();
async function startServer() {
  const app = express();

  await dbConfig(app)
  expressConfig(app);
  routersConfig(app);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}