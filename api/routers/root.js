const Passport = require('../strategies/Passport')

const Auth = require('./Auth')
const Users = require('./Users')
const Publications = require('./Publications')

const root = app => {
    app.use(Passport.initialize())
    app.use('/auth', Passport.authenticate('local', { session: false }), Auth)
    app.use('/users', Users)
    app.use('/publications', Passport.authenticate('jwt', { session: false }), Publications)
}

module.exports = root