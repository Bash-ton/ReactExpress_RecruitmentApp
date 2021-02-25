const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const Post = require('../model/Post');
const { ensureAuthentication } = require('../util/ensureAuth');

//import controllers here
const controller = require('../controller/controller');

//GET ALL APPLICATIONS
router.get('/', ensureAuthentication, controller.getAllApplications);

//CREATE AN APPLICATION
router.post(
    '/',
    ensureAuthentication, 
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

//GET AN APPLICATION WITH SPECIFIC ID
//format: GET: http://localhost:3000/posts/postID={ID}
//exempel GET: http://localhost:3000/posts/postID=6021519f11506e1350b46b11
router.get(
    '/postID=:postsID',
    ensureAuthentication,
    check('postsID').not().isEmpty().isAlphanumeric(),
    controller.getApplicationWithID
);


//TODO ADD GET METHOD TO GET ALL APPLICATIONS WITH 2 SPECIFIC APPLICATIONS (AND function)
//
//HERE



//GET ALL APPLICATIONS WITH 2 SPECIFIC COMPETENCES (OR function)
//format: GET: http://localhost:3000/posts/competence={value}or{value}
//exempel GET: http://localhost:3000/posts/competence/or=comp1&=comp6
router.get('/competence/or=:competence1&=:competence2', ensureAuthentication, controller.getAllApplicationsWithTwoCompetencesOR);

//GET ALL APPLICATIONS WITH ONE SPECIFIC COMPETENCE
//format: GET: http://localhost:3000/posts/competence={value}
//exempel GET: http://localhost:3000/posts/competence=comp1
router.get('/competence=:competence1', ensureAuthentication, controller.getAllApplicationsWithOneSpecificCompetence);

//TODO create function: DELETE ALL APPLICATIONS

//TODO create function: DELETE ONE APPLICATION

//TODO create function: UPDATE ONE APPLICATION

module.exports = router;