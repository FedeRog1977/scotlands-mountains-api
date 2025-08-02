const mongoose = require('mongoose');

// TODO: implement with MongoDB database
const accountSchema = new mongoose.Schema({
  honorific: {
    type: String,
    required: true,
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
  entryDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', accountSchema);
