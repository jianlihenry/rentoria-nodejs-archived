/**
 * REST controller for managing properties in the database
 */
const express = require('express');
const router = express.Router();

function routes(app) {
  app.use('/property', router);

  router.get('/:id', function(req, res) {
    res.send(req.params.id);
  });
}

module.exports = routes;