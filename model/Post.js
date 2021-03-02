const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    startPeriod: {
        type: String,
        required: true
    },
    competence: {
        type: [{name:String, year: Number}],
        required: true
    },
    endPeriod: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: [{year:Number, month:Number, day:Number}],
        required: true
    },
    // The status is either accepted, rejected or unhandled.
    // initial state unhandled?
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);

