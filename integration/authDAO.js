const bcrypt = require('bcrypt');
const { body, validationResult, check } = require('express-validator');
const User = require('../model/user');
const mongoose = require('mongoose');

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
/**
 * Retrieves a user with a given email
 * @module getUserWithEmailDAO
 * @function
 * @requires express-validator
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
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
    const session = await User.startSession();
    session.startTransaction();
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const currentUser = await User.findOne({ email: req.body.data.email}).session(session);
        if (currentUser) {
            return res.status(400).json({Error:'E-mail already in use'});
        }
                const hashedPassword = await new Promise((resolve, reject) => {
                    bcrypt.hash(req.body.data.password, 10, function(err, hash) {
                      if (err) reject(err)
                      resolve(hash)
                    });
                  })

                
                 const user= await User.create([{  username: req.body.data.username,
                    password: hashedPassword,
                    email: req.body.data.email,
                    firstName: req.body.data.firstName,
                    lastName: req.body.data.lastName,
                    dateOfBirth:req.body.data.dateOfBirth,
                    role: req.body.data.role }], { session: session });
                
                 //throw "error"
               await session.commitTransaction()
               await session.endSession()
               res.status(200).json(user[0]);
            } catch (error) {
                    await session.abortTransaction();
                    session.endSession()
                    res.status(503).json({error: "Service currently unavailable"});
            }
}
  

module.exports = {
    createUserDAO,
    getAllUsersDAO,
    getUserWithEmailDAO
}