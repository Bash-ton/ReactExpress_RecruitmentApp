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
        res.json({ message: err});
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
    
       const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
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
                .catch(err => {
                    console.log(err.code)
        
                    if(err.code === 11000){
                        res.status(400).json({"errorType": err.name, "code": err.code, "message": "user already exists"}); //handle user signup error
                    }else{
                        res.status(400).json(err); //default error message
                    }
          });
    })
        })}
  

module.exports = {
    createUserDAO,
    getAllUsersDAO

   

}