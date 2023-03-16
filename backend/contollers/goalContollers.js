const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')
const User = require('../models/userModel')

// DONE
// route: GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
    const goals = await Goal.find({ user: request.user.id })
    if (!goals || goals.length === 0 ) {
        throw new Error('No goals found for this user: ' + request.user.email)
    }
    console.log('GET /api/goals SUCCESS')
    response.status(200).json(goals)
}) 
 
// DONE
// route: POST /api/goals
const setGoals = asyncHandler(async (request, response) => {

    const {description, title} = request.body;
    
    if (!description || !title) {
        response.status(400)
        throw new Error('Please add a description and title field ' + request.body.title)
    }

    const goal = await Goal.create({
        user: request.user.id,
        description: request.body.description,
        title: request.body.title,
        progress: request.body.progress ? request.body.progress : null,
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

    if (!request.body.description || !request.body.title) {
        response.status(400)
        throw new Error('Please add a description and title field')
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

    const user = await User.findById(request.user.id); // request.user <- middleware
    const goal = await Goal.findById(request.params.id);  // request.pamars <- url param

    if (!user ) {
        response.status(401)
        throw new Error("User not found")
    }

    if (!goal ) {
        response.status(400)
        throw new Error("Goal not found")
    }

    if (goal.user.toString() !== user.id) {
        response.status(400)
        throw new Error('Not allowed to delete')
    }

    const deletedGoal = await Goal.findByIdAndDelete(request.params.id); // goal.remove() doesn't seem to work (???)
    response.status(200).json(deletedGoal)
})


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}