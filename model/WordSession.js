
const mongoose = require('mongoose');

const wordSessionSchema = new mongoose.Schema({
  sessionNumber: { type: Number, required: true },
  words: [{ type: String, required: true }]
});


const WordSession = mongoose.model('WordSession', wordSessionSchema);

module.exports = WordSession;
