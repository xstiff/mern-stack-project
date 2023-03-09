const express = require('express')
const router = express.Router()
const {     getGoals, setGoals, putGoals, deleteGoals } = require('../contollers/goalContollers')
const protect = require('../middleware/authMiddleware')





// Route: /api/goals/
router.route('/')   .get(protect, getGoals)
                    .post(protect, setGoals)

          
// Route: /api/goals/:id
router.route('/:id').put(protect, putGoals)
                    .delete(protect, deleteGoals)




module.exports = router