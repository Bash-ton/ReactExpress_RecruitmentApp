
const postDAO = require('../integration/postDAO');
const authDAO = require('../integration/authDAO')
const mongoose = require('../util/database')

const connectToMogoose = async (url) => {
   mongoose.connectToMogoose(url).catch((error)=>{throw error})
}

const getAllApplications = async (req, res) => {
    return await postDAO.getAllApplicationsDAO(req,res).catch((error)=>{throw error})
}

const createApplication = async  (req, res) => {
 return await postDAO.createApplicationDAO(req,res).catch((error)=>{throw error})
}

const getApplicationWithEmail = async (req, res) => {
   return await postDAO.getApplicationWithEmailDAO(req,res).catch((error)=>{throw error})
}

const getAllApplicationsWithSpecificCompetence = async (req, res) => {
   return await postDAO.getAllApplicationsWithSpecificCompetenceDAO (req,res).catch((error)=>{throw error})
}

const getAllUsers= async(req,res)=>{
    return await authDAO.getAllUsersDAO(req,res).catch((error)=>{throw error})
}

const createUser= async (req,res)=>{
    return await authDAO.createUserDAO(req,res).catch((error)=>{throw error})
}

const updateApplicationStatus = async (req, res) => {
    return await postDAO.updateApplicationStatusDAO(req, res).catch((error) => {throw error})
}
const getUserWithEmail = async (req,res)=>{
    return await authDAO.getUserWithEmailDAO(req,res).catch((error)=>{throw error})
}
const updateApplicationSkill = async (req,res)=>{
    return await postDAO.updateApplicationSkillDAO(req,res).catch((error)=>{throw error})
}

module.exports = {
    getUserWithEmail,
    connectToMogoose,
    getAllApplications,
    createApplication,
    getApplicationWithEmail,
    getAllApplicationsWithSpecificCompetence,
    createUser,
    getAllUsers,
    updateApplicationStatus,
    updateApplicationSkill,
}