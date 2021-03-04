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


const getAllApplicationsWithTwoCompetencesORDAO = async (req, res) => {
    console.log(Object.keys(req.params).length
    )
    try{
        const posts = await Post.find({competence: {"$elemMatch": {name: {"$in" :[req.params.competence1, req.params.competence2]}}}} )
        res.json(posts)
    }catch (err){
        res.json(err)
    }
}

const getAllApplicationsWithSpecificCompetenceDAO = async (req, res) => {
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
            try{
        
                const posts = await Post.find({competence:{ "$size" : search.length,"$not": {"$elemMatch": {name:{"$nin": search}}}}})
                res.json(posts)
                console.log(posts)
            }catch (err){
                res.json(err)
            }
        }
        else{
            try{
                console.log(search)
                const posts = await Post.find({competence: {"$elemMatch": {name: search}}} )
                res.json(posts)
            }catch (err){
                res.json(err)
            }
        }
}



















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

        await session.commitTransaction()
        session.endSession()
        res.send('Success')

    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAllApplicationsDAO,
    createApplicationDAO,
    getApplicationWithEmailDAO,
    getAllApplicationsWithTwoCompetencesORDAO,
    getAllApplicationsWithSpecificCompetenceDAO ,
    updateApplicationStatusDAO,
}