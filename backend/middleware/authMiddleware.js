const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (request, response, next) => {
    let token;

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = request.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token

            request.user = await User.findById(decoded.id).select('-password')
            console.log('HERE')
            next()
        }
        catch (err) {
            console.log(err)
            response.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token) {
        response.status(401)
        throw new Error('Not authorized, no token')
    }
})

// const cookieProtect = () => {
// asyncHandler(
//     async (request, response, next) => {
//         let token;

//         if (request.cookies.token) {
//             try {
//                 //get token from header
//                 token = request.cookies.token

//                 const decoded = jwt.verify(token, process.env.JWT_SECRET)

//                 //get user from token

//                 request.user = await User.findById(decoded.id).select('-password')
//                 // console.log('HERE')
//                 next()
//             }
//             catch (err) {
//                 console.log(err)
//                 response.status(401)
//                 throw new Error('Not authorized')
//             }
//         }

//         if(!token) {
//             response.status(401)
//             throw new Error('Not authorized, no token')
//         }
//     }
// )
// }

module.exports = protect