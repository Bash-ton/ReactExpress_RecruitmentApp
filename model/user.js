const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: [{year:Number, month:Number, day:Number}],
        required: true,
    },
    role:{
        type:String,
        default: "client"
    }
});

const User = mongoose.model('users',UserSchema);
module.exports = User;