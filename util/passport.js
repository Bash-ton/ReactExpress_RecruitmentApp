const User = require('../model/user');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (passport)=>{
    passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
   
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            //ska man testa om email finns eller inte finns?
            return done(null, false, { message: 'That email is not registered' });
          }
  
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: 'Password incorrect' });
            }
          });
        }); 
    }
  )); 
 
  /*Each subsequent request will not contain credentials, 
  but rather the unique cookie that identifies the session. 
  In order to support login sessions, 
  Passport will serialize and deserialize user instances to and from the session.*/
  passport.serializeUser((user, done)=> {
    done(null, user.id);
  });

  passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user)=> {
      done(err, user);
    });
  });
}
