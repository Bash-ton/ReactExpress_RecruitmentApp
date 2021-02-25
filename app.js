//main file

//import express
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();

require('./util/passport')(passport);
//const passport = require('./util/passport');

const cors = require('cors');
//TODO CHANGE LAST LINK TO THIS HEROKU DOMAIN
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://react-express-applicationapp.herokuapp.com/']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))

//import mongoose for DB
//const mongoose = require('mongoose');
//import config file
require('dotenv/config');
const url = process.env.DB_CONNECTION
const controller= require('./controller/controller');
controller.connectToMogoose(url);
//import parser to handle json -> http
const bodyParser = require('body-parser');
//const cors = require('cors');


//MIDDLEWARES
//app.use(cors({credentials: true, origin:"http://localhost:3000"}));//enable front end calls from other domains
app.use(bodyParser.json()); //route to body parser (able json -> http)
app.use(bodyParser.urlencoded({extended: true}))

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//import routes here
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
//const { Mongoose } = require('mongoose');

//add middleware here
app.use('/posts', postsRoute);//route to posts
app.use('/auth', authRoute);//route to posts


    //ROUTES
 /*   app.get('/', (req, res) => {
        res.send('Automated heroku?');
    });

  */





/*
//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true},
    () =>{  console.log('connected to DB!')}
);
*/

const path = require('path');
if (true) {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//listen on port chosen by heroku. Other wise put a port for testing
//process.env.PORT
const PORT = process.env.PORT || 8080
app.listen(PORT);
