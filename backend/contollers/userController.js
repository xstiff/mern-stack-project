const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}


// route: POST /api/users
const registerUser = asyncHandler( async (request, response) => {
    const { name, email, password } = request.body

    if (!name || !email || !password) {
        response.status(400)
        throw new Error('Please fulfil all fields')
    }

    const userExist = await User.findOne({email})

    if (userExist) {
        response.status(400);
        throw new Error('User already exists')
    }

    // Pasword hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create(
        {
            name,
            email,
            password: hashedPassword,
        }
    )

    if (user) {
        response.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }else {
        response.status(400).json({
            message: "Invalid data"
        })
    }
    

})


// route: POST /api/users/login
const loginUser = asyncHandler( async (request, response) => {
    const {email, password} = request.body


    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))) {
        response.status(201).json({
            message: 'Logged in as: ' + email,
            token: generateToken(user.id)

        })
    }
    else {
        response.status(400)
        throw new Error("User doesn't exist")
    }

})


// Private route: GET /api/user/me
const getCurrentUser = asyncHandler( async (request, response) => {
    const {_id, name, email} = await User.findById(request.user.id)
    response.json({
        message: 'GET User data',
        user_data: {
            id: _id,
            name,
            email
        }
    })
})


module.exports = {
    registerUser,
    loginUser,
    getCurrentUser 
}