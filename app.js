const express = require('express'),
  bodyparser = require('body-parser'),
  mongoose = require('mongoose'),
  pino = require('express-pino-logger')(),
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
 console.log("Server running on port 3000");
});