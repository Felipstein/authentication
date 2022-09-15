require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const createDefaultUsers = require('./services/createDefaultUsers');

const app = express();
const port = 3001;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(routes);

app.listen(port, () => {
  createDefaultUsers();

  console.log(`Server started at port ${port}`);
});