const express = require('express'),
  bodyparser = require('body-parser'),
  mongoose = require('mongoose'),
  pino = require('express-pino-logger')(),
  logger = require('pino')({ level: process.env.LOG_LEVEL || 'info' }),
  port = process.env.PORT || 3000,
  app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(pino);

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/rentoria', { useNewUrlParser: true });

const propertyController = require('./api/controllers/property_controller.js');
propertyController(app);

app.listen(port, () => {
  logger.info('Server running on port %d', port);
});