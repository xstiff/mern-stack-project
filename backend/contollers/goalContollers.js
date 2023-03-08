const asyncHandler = require('express-async-handler')

// route: GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
    response.status(200).json(
        {
            message: 'Get goals from rotuer'
        })
})

// route: POST /api/goals
const setGoals = asyncHandler(async (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }
    response.status(200).json(
        {
            message: 'Post goals from rotuer'
        })
})

// route: PUT /api/goals/:id
const putGoals = asyncHandler(async (request, response) => {
    response.status(200).json(
        {
            message: 'Put goals from rotuer. Id: ' + request.params.id
        })
})

// route: DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (request, response) => {
    response.status(200).json(
        {
            message: 'Delete goals from rotuer. Id: ' + request.params.id
        })
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}