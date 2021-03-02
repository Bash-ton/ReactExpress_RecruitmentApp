const Post = require('../model/Post');
const { body, validationResult, check } = require('express-validator');

const getAllApplicationsDAO = async (req, res) => {
    try {
       const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
}

/**
 * Creates a new application and saves to Database
 * @module createApplicationDAO
 * @function
 * @requires express-validator
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const createApplicationDAO = async  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const post = new Post({
        email: req.body.email,
        competence: req.body.competence,
        startPeriod: req.body.startPeriod,
        endPeriod: req.body.endPeriod,
        dateOfBirth: req.body.dateOfBirth,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        status: req.body.status
    });
    post.save()
        .then(data => {
            res.status(200).json(data); //put data on screen
        })
        .catch(err => {
            res.status(400).json(err); //put data on screen
        });
};

/**
 * Gets a application with a given email
 * @module getApplicationWithEmailDAO
 * @function
 * @requires express-validator
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const getApplicationWithEmailDAO = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const post = await Post.findOne({ email: req.params.email });
        if(post) return res.json(post);
        else return res.status(400).json({"Error": "Application with email does not exist"});
    }catch (err){
        res.json(err)
    }
}

/**
 * Get applications with two specified competences
 * @module getAllApplicationsWithOneSpecificCompetenceDAO
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const getAllApplicationsWithTwoCompetencesORDAO = async (req, res) => {
    try{
        const posts = await Post.find({competence: {"$elemMatch": {name: {"$in" :[req.params.competence1, req.params.competence2]}}}} )
        res.json(posts)
    }catch (err){
        res.json(err)
    }
}

/**
 * Get applications with a given competence
 * @module getAllApplicationsWithOneSpecificCompetenceDAO
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const getAllApplicationsWithOneSpecificCompetenceDAO = async (req, res) => {
    try{
        const posts = await Post.find({competence: {"$elemMatch": {name: req.params.competence1}}} )
        res.json(posts)
    }catch (err){
        res.json(err)
    }
}

/**
 * Update a application status with a given email
 * @module updateApplicationStatusDAO
 * @function
 * @requires express-validator
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const updateApplicationStatusDAO = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let filter = {email: req.body.email};
        let update = {status: req.body.status}; 
        await Post.findOneAndUpdate(filter, update);
        const newPost = await Post.findOne(filter);
        res.json(newPost);
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAllApplicationsDAO,
    createApplicationDAO,
    getApplicationWithEmailDAO,
    getAllApplicationsWithTwoCompetencesORDAO,
    getAllApplicationsWithOneSpecificCompetenceDAO,
    updateApplicationStatusDAO,
}