const querier = require('../db/querier')

module.exports = {
    add: (req, res) => {
        const { user: { data: { id } }, body: { category, content, attach } } = req

        const query = `INSERT INTO publications(user, category, content, attach) VALUES(?, ?, ?, ?)`
        const placeholders = [id, category, content, attach]
        querier(query, placeholders)
            .then(results => {
                return res.status(201).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    get: (_, res) => {
        const query = `SELECT p.id, p.user, p.content, p.category, p.attach, u.name, u.avatar, c.description FROM publications as p
                       LEFT JOIN users as u ON p.user = u.id
                       LEFT JOIN categories as c ON p.category = c.id
                       ORDER BY p.id DESC
                       `
        querier(query)
            .then(results => {
                return res.status(200).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    remove: (req, res) => {
        const { user: { data: { id: userId, admin } }, params: { id } } = req
        const query = admin ? `DELETE FROM publications WHERE id = ?` : `DELETE FROM publications WHERE id = ? AND user = ?`
        const placeholders = admin ? [id] : [id, userId]
        querier(query, placeholders)
            .then(results => {
                return res.status(202).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    getDetails: async (req, res) => {
        const { params: { id } } = req
        const query = ` SELECT p.id, p.user, p.content, p.category, p.attach, u.name, u.avatar, c.description FROM publications as p
                        LEFT JOIN users as u ON p.user = u.id
                        LEFT JOIN categories as c ON p.category = c.id
                        WHERE p.id = ?
                        ORDER BY p.id DESC
                      `
        const placeholders = [id]
        const publication = await querier(query, placeholders)

        if (!publication[0]) return res.status(404).json('Not found')

        const commentsQuery = `SELECT c.id, c.author, c.publication, c.content, u.name, u.avatar 
                               FROM comments as c
                               LEFT JOIN users as u ON c.author = u.id
                               WHERE publication = ?`
        const cPlaceholders = [publication[0].id]
        const comments = await querier(commentsQuery, cPlaceholders)

        res.status(200).json({ publication: publication[0], comments })
    },

    addComment: (req, res) => {
        const { user: { data: { id } }, body: { publication, content } } = req
        const query = `INSERT INTO comments(author, publication, content) VALUES(?,?,?)`
        const placeholders = [id, publication, content]
        querier(query, placeholders)
            .then(results => {
                return res.status(201).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })

    },

    removeComment: (req, res) => {
        const { user: { data: { id: userId, admin } }, params: { id } } = req
        const query = admin ? `DELETE FROM comments WHERE id = ?` : `DELETE FROM comments WHERE id = ? AND author = ?`
        const placeholders = admin ? [id] : [id, userId]
        querier(query, placeholders)
            .then(results => {
                return res.status(202).json(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    }
}