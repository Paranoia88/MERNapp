const express = require('express')
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require ('../controllers/workoutcontroller')
const router = express.Router()

//GET ALL REQUESTS
router.get('/', getWorkouts)

//GET single request
router.get('/:id', getWorkout)

//POST A NEW WORKOUT
router.post('/', createWorkout)

//DELETE A WORKPUT
router.delete('/:id', deleteWorkout)

//UPDATE A WORKOUT
router.patch('/:id', updateWorkout)
module.exports = router