const mongoose = require('mongoose');

// TODO: implement with MongoDB database
const accountSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  honorific: {
    type: String,
    required: true,
  },
  entryDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  forename: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Account', accountSchema);
