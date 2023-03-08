const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')


// route: GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
    const goals = await Goal.find()
    
    response.status(200).json(goals)
})
 

// route: POST /api/goals
const setGoals = asyncHandler(async (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: request.body.text,

    })

    response.status(200).json(goal)
})

// route: PUT /api/goals/:id
const putGoals = asyncHandler(async (request, response) => {
    const goal = await Goal.findById(request.params.id);
    if (!goal ) {
        response.status(400)
        throw new Error("Goal not found")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
        }
    )
    response.status(200).json(updatedGoal)
})

// route: DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (request, response) => {
    const goal = await Goal.findById(request.params.id);
    if (!goal ) {
        response.status(400)
        throw new Error("Goal not found")
    }

    const removedGoal = await goal.remove()
    response.status(200).json(removedGoal)
})


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}