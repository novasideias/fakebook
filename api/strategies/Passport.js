const passport = require('passport')
const Local = require('./Local')
const Jwt = require('./Jwt')

//Applying strategies
passport.use(Local)
passport.use(Jwt)

module.exports = passport