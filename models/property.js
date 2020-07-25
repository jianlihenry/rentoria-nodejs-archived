/**
 * Property model
 */
const mongoose = require('mongoose');

var Property = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  bedroom: {
    type: Number,
    required: true
  },
  bathroom: {
    type: Number,
    required: true
  },
  garage: {
    type: Number,
    required: true
  },
  story: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  community: String

});

module.exports = {
  model: mongoose.model('property', Property)
}