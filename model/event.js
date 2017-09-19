const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventLocation: {
    type: String,
    required: true
  },
  eventTime: {
  	type: Date
  },
  eventUsers: {
  	type: Array
  }
});

module.exports = mongoose.model('Event', EventSchema);
