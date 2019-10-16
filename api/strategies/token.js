const jwt = require('jsonwebtoken')

const sign = payload => {
    return new Promise(resolve => {
        const iat = Date.now()
        const exp = iat + (86400000 * 7)
        const claims = {
            iat,
            exp,
            data: payload,
        }
        const token = jwt.sign(claims, process.env.JWT_KEY)

        resolve(token)
    })
}

module.exports = { sign }