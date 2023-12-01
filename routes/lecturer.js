const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const Lecturer = require('../models/lecturer');

router.post('/add',async (req,res)=>{
    try {
        const { lecturerName } = req.body;
        
        const lecturer = await Lecturer.create({ name: lecturerName });
    
        res.json({ message: 'Lecturer added successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

router.post('/choose-subject',async (req,res)=>{
    try {
        
        const {lecturerId,subjectId} = req.body;

        const lecturer = await Lecturer.findById(lecturerId);
        if(!lecturer){
            res.status(404).json({message:"Lecturer Not Found"})
        }

        const subject = await Subject.findById(subjectId);
        if(!subject){
            res.status(404).json({message:"Subject Not Found"})
        }

        lecturer.subjects.push(subject);

        await lecturer.save();
    
        res.json({ message: 'Lecturer added for Student successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

})

module.exports = router;