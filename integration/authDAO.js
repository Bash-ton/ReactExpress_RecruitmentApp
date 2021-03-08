const bcrypt = require('bcrypt');
const { body, validationResult, check } = require('express-validator');
const User = require('../model/user');

/**
 * Gets all users from database
 * @module getAllUsersDAO
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const getAllUsersDAO= async (req,res)=>{
    try{
        const auths = await User.find();
        res.json(auths);
    }catch (err){
        res.status(503).json({error: "Service currently unavailable"});
    }
}

const getUserWithEmailDAO = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await User.findOne({ email: req.params.email });
        if(user) return res.json(user);
        else return res.status(400).json({"Error": "User with email does not exist"});
    }catch (err){
        res.status(503).json({error: "Service currently unavailable", detail: ""  + err});
    }
}
/**
 * Creates a new user, hashes the users password and saves to database
 * @module createUserDAO
 * @function
 * @requires bcrypt
 * @requires express-validator
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const createUserDAO = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const currentUser = await User.findOne({ email: req.body.data.email});
        if (currentUser) {
            return res.status(400).json({Error:'E-mail already in use'});
        }

        const user = new User({
            username: req.body.data.username,
            password: req.body.data.password,
            email: req.body.data.email,
            firstName: req.body.data.firstName,
            lastName: req.body.data.lastName,
            dateOfBirth:req.body.data.dateOfBirth,
            role: req.body.data.role
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user
                .save()
                .then(data => {
                    res.status(200).json(data); //put data on screen
                })
            })
        })
    } catch (error) {
        res.status(503).json({error: "Service currently unavailable"});
    }
}
  

module.exports = {
    getUserWithEmailDAO,
    createUserDAO,
    getAllUsersDAO
}