const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const Student = require('../models/student');

router.post('/add',async (req,res)=>{
    try {
        const { studentName } = req.body;
        
        const student = await Student.create({ name: studentName });
    
        res.json({ message: 'Student added successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

router.post('/choose-subject',async (req,res)=>{
    try {
        
        const {subjectId,studentId} = req.body;

        const student = await Student.findById(studentId);
        if(!student){
            res.status(404).json({message:"Student Not Found"})
        }

        const subject = await Subject.findById(subjectId);
        if(!subject){
            res.status(404).json({message:"Subject Not Found"})
        }

        student.subjects.push(subject);

        await student.save();
        Subjecton({ error: error.message });
      }
      catch (error) {
        res.status(500).json({ error: error.message });
      }
});

router.get('/getSubjects/:studentId',async (req,res)=>{
    try {
        const studentId = req.params.studentId;
  
        const student = await Student.findById(studentId).populate("subjects");

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        
        res.json({subjects : student.subjects});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

module.exports = router;