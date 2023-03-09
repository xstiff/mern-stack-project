const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')
const User = require('../models/userModel')

// DONE
// route: GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
    const goals = await Goal.find({ user: request.user.id })
    // console.log(goals)
    if (!goals) {
        throw new Error('Not goals found for this user')
        response.status(400).json()
    }

    response.status(200).json(goals)
}) 
 
// DONE
// route: POST /api/goals
const setGoals = asyncHandler(async (request, response) => {

    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        user: request.user.id,
        text: request.body.text,
    })

    response.status(200).json(goal)
})


// DONE
// route: PUT /api/goals/:id
const putGoals = asyncHandler(async (request, response) => {
    const user = await User.findById(request.user.id); // request.user <- middleware
    const goal = await Goal.findById(request.params.id);  // request.pamars <- url param

    if (!user ) {
        response.status(401)
        throw new Error("User not found")
    }

    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }

    if (!goal ) {
        response.status(400)
        throw new Error("Goal not found")
    }

    if (goal.user.toString() !== user.id) {
        response.status(400)
        throw new Error('Not allowed to edit')
    }

    // console.log(goal.user.toString())
    // console.log(user.id)


    const updatedGoal = await Goal.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
        }
    )
    response.status(200).json({
        before: goal,
        after: updatedGoal  
    })
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