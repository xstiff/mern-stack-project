const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getCurrentUser, getExpire } = require('../contollers/userController')
const protect = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getCurrentUser)
// router.get('/expire', getExpire)

 
module.exports =  router 

