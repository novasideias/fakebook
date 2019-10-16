const LocalStrategy = require('passport-local').Strategy

const checkCredentials = require('./credentials')

//Configurations of local strategy
const LocalConfigs = {
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqtoCallback: true
}

//Local Strategy Definition
const Local = new LocalStrategy(LocalConfigs, async (email, password, done) => {

    const user = await checkCredentials(email, password)

    //Validation logic
    if (!user) return done(null, false, { message: 'Erro ao realizar login.' })

    //Authentication successful!
    return done(null, user)
})



module.exports = Local