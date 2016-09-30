const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const api = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// TODO: Configure CORS (https://github.com/expressjs/cors)
app.use(cors());
// TODO: Configure Helmet (https://github.com/helmetjs/helmet)
app.use(helmet());
// TODO: Configure Morgan (https://github.com/expressjs/morgan)
app.use(morgan('dev'));
// TODO: Add API endpoints
app.use('/api', api);

app.get('/*', (req, res) => {
  res.send('Welcome to your API');
});

app.listen(PORT, () => {
  console.log(`You're listening to the smooth sounds of port ${PORT}`);
});

module.exports = app;
