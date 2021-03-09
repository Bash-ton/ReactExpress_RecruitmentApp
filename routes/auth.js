const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const { forwardAuthenticated, ensureAuthentication } = require('../util/ensureAuth');
const { body, validationResult, check } = require('express-validator');


//import controllers here
const controller = require('../controller/controller');
//import models here
const User = require('../model/user');

/**
 * POST /auth/login
 * @summary POST request for authenticating a user
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.getAllUsers - Express middleware.
 */
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.status(200).json({"role": req.user.role,"email":req.user.email, "username":req.user.username, "firstName": req.user.firstName, "lastName": req.user.lastName, "dateOfBirth":req.user.dateOfBirth[0] });
});


/**
 * GET /auth
 * @summary GET request for getting all users
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.getAllUsers - Express middleware.
 */
router.get('/', ensureAuthentication, controller.getAllUsers);

/**
 * GET /user
 * @summary GET request for getting  one users
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.getAllUsers - Express middleware.
 */
router.get('/user=:email',check('email').isEmail(),ensureAuthentication,controller.getUserWithEmail);


/**
 * POST /auth/register
 * @summary POST request for registering a new user
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.createUser - Express middleware.
 */
router.post(
    '/register',
    check('data.email').isEmail(),
    check('data.password').isLength({ min: 6 }).withMessage('must be at least 6 chars long'),
    check('data.username').not().isEmpty(),
    check('data.firstName').not().isEmpty().not().isNumeric(),
    check('data.lastName').not().isEmpty().not().isNumeric(),
    controller.createUser)



//DELETE ALL users

module.exports = router;