const express = require("express"),
  bodyparser = require("body-parser"),
  port = process.env.PORT || 3000,
  app = express();

const property_controller = require('./api/controllers/property_controller.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

property_controller(app);

app.listen(port, () => {
 console.log("Server running on port 3000");
});