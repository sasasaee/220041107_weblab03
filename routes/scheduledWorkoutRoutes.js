const express = require('express');
const router = express.Router();
const { scheduleWorkout } = require('../controllers/scheduledWorkoutController');

router.post('/', scheduleWorkout);

module.exports = router;
