const connectToMogoose = async (url) => {
const mongoose = require('mongoose');
mongoose.connect(url,
        { useUnifiedTopology: true, useNewUrlParser: true},
        () =>{  console.log('connected to DB!')}
    );

 }
    module.exports = {
     connectToMogoose
    }
    