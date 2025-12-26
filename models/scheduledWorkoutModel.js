const mongoose = require('mongoose');

const scheduledWorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'trainer',
    required: true
  },
  workoutTypes: {
    type: [String],
    required: true
  },
  scheduledAt: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('scheduledWorkout', scheduledWorkoutSchema);
