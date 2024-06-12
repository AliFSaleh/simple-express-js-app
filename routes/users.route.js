const express = require('express')

router = express.Router()

const usersController = require('../controllers/usersController');

router.route('/')
            .get(usersController.getUsers)
router.route('/login')
            .get(usersController.login)
router.route('/register')
            .get(usersController.register)

module.exports = router

