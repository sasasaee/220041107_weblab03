const User = require('../models/userModel')

// get all workouts
const getUsers = async (req, res) => {
  const { active, membershipType } = req.query;
  const filter = {};
  if (active !== undefined) filter.active = active === 'true';
  if (membershipType) filter.membershipType = membershipType;

  try {
    const users = await User.find(filter).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single user by id
const getUserById = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'No such user' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// create a new user
const createUser = async (req, res) => {
  const { name, email, age, membershipType } = req.body;

  try {
    const user = await User.create({ name, email, age, membershipType });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
      return res.status(400).json({ error: 'No such user' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!user) {
      return res.status(400).json({ error: 'No such user' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}