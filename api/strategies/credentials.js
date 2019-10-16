const querier = require('../db/querier')

const checkCredentials = (email, password) => new Promise(async resolve => {
    try {
        const query = 'SELECT * FROM users WHERE email = ?'
        const placeholders = [email]
        const results = await querier(query, placeholders)
        const usuario = results[0]

        if (!usuario) return resolve(null)

        if (usuario.password !== password)
            return resolve(null)

        return resolve(usuario)


    } catch (err) { return resolve(null) }
})


module.exports = checkCredentials