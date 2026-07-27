const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('lessons')
      .populate('instructor', 'name avatar');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get course by subject
router.get('/subject/:subject', async (req, res) => {
  try {
    const course = await Course.findOne({ subject: req.params.subject })
      .populate('lessons');
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
