const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  name: String,
  topic: String,
  difficulty: String,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;