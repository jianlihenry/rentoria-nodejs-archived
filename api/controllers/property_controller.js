/**
 * REST controller for managing properties in the database
 */
const express = require('express');
const router = express.Router();
const propertyModel = require('../../models/property.js').model;

function routes(app) {
  app.use('/property', router);

  router.get('/:id', function(req, res) {
    propertyModel.findById(req.params.id, function(err, doc) {
      if (err) res.send(err);
      else res.json(doc);
    });
  });

  // TODO: add authentication to this api
  router.post('/insert', function(req, res) {
    propertyModel.create(req.body, function(err, entry) {
      if (err) res.send(err);
      else res.send('insert succeeded');
    });
  });
}

module.exports = routes;