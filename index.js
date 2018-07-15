const express = require('express');
const bodyParser = require('body-parser');

const {
  NODE_ENV,
  PORT,
} = process.env;

const app = express();

app.use(bodyParser.json());

require('./routes/testRoutes')(app);

if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT || 4000);
