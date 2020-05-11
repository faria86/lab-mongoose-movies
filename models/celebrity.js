const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: [ String ],
  },
  occupation: {
    type: { type: String, enum: ['actor', 'singer', 'comedian', 'unknown'] }
  },
  catchPhrase: {
    type: String,
    require: true
  }
});

const Celebrity = mongoose.model('Celebrity', bookSchema);

module.exports = Celebrity;