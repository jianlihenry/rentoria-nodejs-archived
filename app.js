const express = require('express'),
  bodyparser = require("body-parser"),
  port = process.env.PORT || 3000,
  app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rentoria');

const propertyController = require('./api/controllers/property_controller.js');
propertyController(app);

app.listen(port, () => {
 console.log("Server running on port 3000");
});