const ScheduledWorkout = require('../models/scheduledWorkoutModel');
const User = require('../models/userModel');
const Trainer = require('../models/trainerModel');

const scheduleWorkout = async (req, res) => {
  const { userId, trainerId, workoutTypes, scheduledAt, notes } = req.body;

  try {
    // 1. Validate user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.membershipType === 'basic') {
      return res.status(403).json({ error: 'Only premium/elite users can schedule workouts' });
    }

    // 2. Validate trainer
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) return res.status(404).json({ error: 'Trainer not found' });

    if (!trainer.available) {
      return res.status(400).json({ error: 'Trainer is not available' });
    }

    // 3. Create scheduled workout
    const scheduledWorkout = await ScheduledWorkout.create({
      user: userId,
      trainer: trainerId,
      workoutTypes,
      scheduledAt,
      notes
    });

    res.status(201).json(scheduledWorkout);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { scheduleWorkout };
