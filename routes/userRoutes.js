const express = require('express');

const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// GET all
router.get('/', getUsers)

// GET a single
router.get('/:id', getUserById);

// POST a new user
router.post('/', createUser);

// UPDATE a user
router.patch('/:id', updateUser);

// DELETE a user
router.delete('/:id', deleteUser);

module.exports = router;