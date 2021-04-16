module.exports = app => {
  const courses = require('../controllers/course.controller.js');

  let router = require('express').Router();

  // Retrieve all Courses
  router.get('/', courses.findAll);

  // Update a Course with id
  router.put('/:id', courses.update);

  app.use('/api/courses', router);
};
