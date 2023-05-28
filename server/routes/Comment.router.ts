const router = require('express').Router()
const {createComment, getComments} = require('../controllers/Comment.controller')

router.post('/comment/:id', createComment)
router.get('/comment/:id', getComments)

module.exports = router

export {}