const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

router.post('/add', async (req, res) => {
    try {
      const { subjectName } = req.body;

      const subject = await Subject.create({ name: subjectName });
  
      res.json({ message: 'Subject added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.get('/getSubject/:subjectId',async (req,res)=>{
    try {
        const subjectId = req.params.subjectId;
  
        const subject = await Subject.findById(subjectId);

        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        
        res.json(subject);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

router.get('/getByLeqturer',async (req,res) => {
    try {
      const lecturerToFilter = req.body;
  
      const lecturer = await Lecturer.findone({lecturerToFilter}).populate('subjects').exec();
  
      if (!lecturer) {
        return res.status(404).json({ message: 'Lecturer not found' });
      }
  
      res.json({ subjects: lecturer.subjects });
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;