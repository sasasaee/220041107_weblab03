const express = require('express');
const router = express.Router();

const {
  getTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer
} = require('../controllers/trainerController');

// GET all trainers
router.get('/', getTrainers);

// GET single trainer
router.get('/:id', getTrainerById);

// POST create new trainer
router.post('/', createTrainer);

// PATCH update trainer
router.patch('/:id', updateTrainer);

// DELETE trainer
router.delete('/:id', deleteTrainer);

module.exports = router;
