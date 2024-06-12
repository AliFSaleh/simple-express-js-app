const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/coursesController');

router.route('/')
        .get(coursesController.getCourses)
        .post(coursesController.storeCourse)

router.route('/:course_id')
        .get(coursesController.getCourse)

module.exports = router