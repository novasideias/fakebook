const querier = require('../db/querier')
module.exports = {
    add: (req, res) => {
        const { name, email, password, course, birth, avatar } = req.body
        const query = `INSERT INTO users(name, email, password, course, birth, avatar) VALUES(?, ?, ?, ?, ?, ?)`
        const placeholders = [name, email, password, course, birth, avatar]
        querier(query, placeholders)
            .then(results => {
                return res.status(201).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    get: (req, res) => {
        const query = 'SELECT * FROM users'
        querier(query)
            .then(results => {
                return res.status(200).json(results)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }
}