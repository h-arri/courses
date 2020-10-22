const db = require('../models');
const Courses = db.courses;

// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
  // wip - below condition can be used to filter the courses based on the wishListFlag
  const wishListFlag = req.query.wishListFlag;
  const condition = wishListFlag !== undefined ? { 'wishListFlag': wishListFlag } : {};

  Courses.find(condition)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error occurred while retrieving courses.'
      });
    });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Course to update can not be empty!'
    });
  }

  const id = req.params.id;

  Courses.findOneAndUpdate({ 'id': id }, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Course with id=${id}. Maybe Course was not found!`
        });
      } else {
        res.send({ message: 'Course was updated successfully.' });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Course with id=' + id
      });
    });
};
