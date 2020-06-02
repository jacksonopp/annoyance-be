const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timesSchema = mongoose.Schema({
  wait_time: {
    type: Number,
    required: true,
  },
});

const Times = (module.exports = mongoose.model('Times', timesSchema));
