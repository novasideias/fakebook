const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fakebook'
})

const querier = (query, placeholders = []) => {
    return new Promise((resolve, reject) => {
        pool.query(query, placeholders, (err, results) => {
            if (err) reject(err)
            resolve(results)
        })
    })
}

module.exports = querier