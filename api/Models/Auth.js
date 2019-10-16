const Jwt = require('../strategies/token')

module.exports = {
    generateToken: async (req, res) => {
        const { id, name, email, avatar, admin } = req.user
        const token = await Jwt.sign({ id, name, email, avatar, admin })
        res.status(200).json({ token, id, admin })
    },

}