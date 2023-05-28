const router = require('express').Router()
const { registerUser, loginUser, getUserInfo, logoutUser } = require('../controllers/User.controller')

router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/profile', getUserInfo)
router.post('/logout', logoutUser)

module.exports = router

export {}