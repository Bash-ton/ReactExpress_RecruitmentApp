const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const Post = require('../model/Post');
const { ensureAuthentication } = require('../util/ensureAuth');

//import controllers here
const controller = require('../controller/controller');

/**
 * GET /posts
 * @summary GET request for retrieving all application
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.createApplication - Express middleware.
 * @param {callback} ensureAuthentication - Authentication middleware
 */
router.get('/', ensureAuthentication, controller.getAllApplications);

/**
 * POST /posts
 * @summary Post request for creating a new application
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.createApplication - Express middleware.
 * @param {callback} ensureAuthentication - Authentication middleware
 */
router.post(
    '/',
    ensureAuthentication, 
    check('email').isEmail(),
    check('competence.*.name').not().isEmpty().stripLow(true).escape().withMessage("Provide competence name"),
    check('competence.*.year').isInt({ min: 0, max: 99 }),
    check('startPeriod').not().isEmpty().isDate().isAfter().withMessage("must be valid date"),
    check('endPeriod').not().isEmpty().isDate().isAfter().withMessage("must be valid date"),
    // TODO check if dateOfBirth is before current date
    // check('dateOfBirth').not().isEmpty().isDate().withMessage("must be valid date"),
    check('firstName').not().isEmpty().not().isNumeric(),
    check('lastName').not().isEmpty().not().isNumeric(),
    // The status is either accepted, rejected or unhandled.
    check('status').toLowerCase().not().isEmpty().isIn(['accepted', 'rejected', 'unhandled']),
    controller.createApplication
);

/**
 * POST /posts/postEmail=test@test.com
 * @summary Post request for updating an applications status
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.getApplicationWithEmail - Express middleware.
 * @param {callback} ensureAuthentication - Authentication middleware
 */
router.get(
    '/postEmail=:email',
    ensureAuthentication,
    check('email').isEmail(),
    controller.getApplicationWithEmail
);


//TODO ADD GET METHOD TO GET ALL APPLICATIONS WITH 2 SPECIFIC APPLICATIONS (AND function)
//
//HERE



//GET ALL APPLICATIONS WITH 2 SPECIFIC COMPETENCES (OR function)
//format: GET: http://localhost:3000/posts/competence={value}or{value}
//exempel GET: http://localhost:3000/posts/competence/or=comp1&=comp6
//router.get('/competence/or=:competence1&=:competence2', ensureAuthentication, controller.getAllApplicationsWithTwoCompetencesOR);

//GET ALL APPLICATIONS WITH ONE SPECIFIC COMPETENCE
//format: GET: http://localhost:3000/posts/competence={value}
//exempel GET: http://localhost:3000/posts/competence=comp1
router.get('/competence=:competence1&=:competence2&=:competence3&=:competence4&=:competence5', ensureAuthentication, controller.getAllApplicationsWithSpecificCompetence);
router.get('/competence=:competence1&=:competence2&=:competence3&=:competence4', ensureAuthentication, controller.getAllApplicationsWithSpecificCompetence);
router.get('/competence=:competence1&=:competence2&=:competence3', ensureAuthentication, controller.getAllApplicationsWithSpecificCompetence);
router.get('/competence=:competence1&=:competence2', ensureAuthentication, controller.getAllApplicationsWithSpecificCompetence);
router.get('/competence=:competence1', ensureAuthentication, controller.getAllApplicationsWithSpecificCompetence);


//TODO create function: DELETE ALL APPLICATIONS

//TODO create function: DELETE ONE APPLICATION

/**
 * POST /posts/application
 * @summary Post request for updating an applications status
 * @requires express-validator
 * @function
 * @param {string} path - Express path.
 * @param {callback} controller.updateApplicationStatus - Express middleware.
 * @param {callback} ensureAuthentication - Authentication middleware
 */
router.post(
    '/application', 
    ensureAuthentication,
    check('email').isEmail(),
    check('email').custom(value => {
        return Post.findOne({ email: value }).then(application => {
          if (!application) {
            return Promise.reject('Application does not exist');
          }
        });
    }), 
    check('status').toLowerCase().not().isEmpty().isIn(['accepted', 'rejected', 'unhandled']),
    controller.updateApplicationStatus
);

module.exports = router;