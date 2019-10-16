const router = require('express').Router()
const Auth = require('../models/Auth')

router.route('/')
    .post(Auth.generateToken)



module.exports = router