const express = require('express')
const router = express.Router()
const {     getGoals, setGoals, putGoals, deleteGoals } = require('../contollers/goalContollers')




// Route: /api/goals/
router.route('/')   .get(getGoals)
                    .post(setGoals)

          
// Route: /api/goals/:id
router.route('/:id').put(putGoals)
                    .delete(deleteGoals)




module.exports = router