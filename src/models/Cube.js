const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: /^https?:\/\//i,
  },
  difficultyLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
