const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
