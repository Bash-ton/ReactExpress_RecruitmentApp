const Post = require('../model/Post');
const { body, validationResult, check } = require('express-validator');



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
const getAllApplicationsDAO = async (req, res) => {
    try {
       const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(503).json({error: "Service currently unavailable"});
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
    const session = await Post.startSession()
    session.startTransaction()
    try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const application = await Post.findOne({ email: req.body.email}).session(session);
        if (application) {
            return res.status(400).json({Error:'Application for applicant already exists'});
        }
        const post = await Post.create([{
            email: req.body.email,
            competence: req.body.competence,
            startPeriod: req.body.startPeriod,
            endPeriod: req.body.endPeriod,
            dateOfBirth: req.body.dateOfBirth,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            status: req.body.status
        }], { session: session });
       // throw "error1"
        await session.commitTransaction()
         session.endSession()
         res.status(200).json(post[0]);
    } catch (error) {
         await session.abortTransaction();
        session.endSession();
        res.status(503).json({error: "Service currently unavailable", detail: ""  + error});
    }
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
        res.status(503).json({error: "Service currently unavailable", detail: ""  + err});
    }
}


/**
 * Get applications with a given competence
 * @module getAllApplicationsWithSpecificCompetenceDAO
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.body The JSON payload.
 * @returns {undefined}
 */
const getAllApplicationsWithSpecificCompetenceDAO = async (req, res) => {
    try {
        console.log(req.params)
        let search="";
        if(Object.keys(req.params).length===1)
        search= req.params.competence1;
        if(Object.keys(req.params).length===2)
        search= [req.params.competence1, req.params.competence2];
        if(Object.keys(req.params).length===3)
        search= [req.params.competence1, req.params.competence2,req.params.competence3];
        if(Object.keys(req.params).length===4)
        search= [req.params.competence1, req.params.competence2,req.params.competence3,req.params.competence4];
        if(Object.keys(req.params).length===5)
        search= [req.params.competence1, req.params.competence2,req.params.competence3,req.params.competence4,req.params.competence5];

        if(Array.isArray(search)){
            const posts = await Post.find({competence:{ "$size" : search.length,"$not": {"$elemMatch": {name:{"$nin": search}}}}})
            res.json(posts)
        }
        else{
            const posts = await Post.find({competence: {"$elemMatch": {name: search}}} )
            res.json(posts)
        }
    } catch (error) {
        res.status(503).json({error: "Service currently unavailable", detail: ""  + error});
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
    const session = await Post.startSession()
    try {
        session.startTransaction()
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let filter = {email: req.body.email};
        let update = {status: req.body.status}; 

        
        const post = await Post.findOneAndUpdate(filter, update).session(session);
        res.json(post);
       // throw "error"
        await session.commitTransaction()
        session.endSession()
        res.send('Success')
    } catch (error) {
        await session.abortTransaction();
        await session.endSession()
        res.status(503).json({Explanation: ""  + error});
    }
}

module.exports = {
    getAllApplicationsDAO,
    createApplicationDAO,
    getApplicationWithEmailDAO,
    getAllApplicationsWithSpecificCompetenceDAO ,
    updateApplicationStatusDAO,
}