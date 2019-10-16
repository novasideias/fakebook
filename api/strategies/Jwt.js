require('dotenv').config()

const passportJWT = require('passport-jwt')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const JWTConfigs = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
}


//JWT Strategy Definition
const Jwt = new JWTStrategy(JWTConfigs, (payload, done, err) => {
    if (err) return done(err)

    return done(null, payload)
})

module.exports = Jwt

