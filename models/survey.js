const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const surveySchema = Schema({
  random_time_from_start: {
    type: Number,
    required: true,
  },
  random_time_from_success: {
    type: Number,
    required: true,
  },
  how_long_did_it_feel: {
    type: Number,
    required: true,
  },
  was_it_too_long: {
    type: Boolean,
    required: true,
  },
});
