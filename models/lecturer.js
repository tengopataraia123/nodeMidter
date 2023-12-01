const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
  name: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

module.exports = Lecturer;
