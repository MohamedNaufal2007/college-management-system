const express = require('express');

const router = express.Router();

// Sample courses data
const courses = [
  {
    id: 1,
    title: 'Computer Science Fundamentals',
    code: 'CS101',
    department: 'Computer Science',
    credits: 3,
    description: 'Introduction to programming and computer science concepts'
  },
  {
    id: 2,
    title: 'Data Structures',
    code: 'CS201',
    department: 'Computer Science',
    credits: 4,
    description: 'Advanced data structures and algorithms'
  }
];

// Get all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// Get course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  res.json(course);
});

module.exports = router;