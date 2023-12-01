const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  lecturers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecturer' }],
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
