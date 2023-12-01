const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/midtermNode").then(()=>console.log("database connected"));

app.use(bodyParser.json());

const subjectRoutes = require('./routes/subject');
app.use('/subject', subjectRoutes);

const lecturerRoutes = require('./routes/lecturer');
app.use('/lecturer', lecturerRoutes);

const studentRouter = require('./routes/student');
app.use('/student', studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
