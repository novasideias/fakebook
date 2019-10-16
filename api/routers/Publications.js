const router = require('express').Router()
const Publication = require('../models/Publication')

router.route('/')
    .post(Publication.add)
    .get(Publication.get)

router.route('/:id')
    .delete(Publication.remove)
    .get(Publication.getDetails)

router.route('/comments')
    .post(Publication.addComment)

router.route('/comments/:id')
    .delete(Publication.removeComment)

module.exports = router