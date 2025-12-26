const Trainer = require('../models/trainerModel');

// Get all
const getTrainers = async (req, res) => {
  const { specialization, available } = req.query;
  const filter = {};
  if (specialization) filter.specialization = specialization;
  if (available !== undefined) filter.available = available === 'true';

  try {
    const trainers = await Trainer.find(filter).sort({ createdAt: -1 });
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single trainer by ID
const getTrainerById = async (req, res) => {
  const { id } = req.params;

  try {
    const trainer = await Trainer.findById(id);
    if (!trainer) return res.status(404).json({ error: 'No such trainer' });
    res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new trainer
const createTrainer = async (req, res) => {
  const { name, email, specialization, experienceYears, hourlyRate, available, certifications } = req.body;

  try {
    const trainer = await Trainer.create({ name, email, specialization, experienceYears, hourlyRate, available, certifications });
    res.status(201).json(trainer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a trainer
const updateTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    const trainer = await Trainer.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!trainer) return res.status(400).json({ error: 'No such trainer' });
    res.status(200).json(trainer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a trainer
const deleteTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    const trainer = await Trainer.findOneAndDelete({ _id: id });
    if (!trainer) return res.status(400).json({ error: 'No such trainer' });
    res.status(200).json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer
};
