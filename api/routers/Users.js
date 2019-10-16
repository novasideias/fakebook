const router = require('express').Router()
const User = require('../models/User')

router.route('/')
    .post(User.add)
    .get(User.get)

module.exports = router