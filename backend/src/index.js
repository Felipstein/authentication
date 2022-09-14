require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const createDefaultUsers = require('./services/createDefaultUsers');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  createDefaultUsers();

  console.log(`Server started at port ${port}`);
});