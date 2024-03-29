const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts (not all contacts because user can only access their own contacts so each contact will be associated with a specific user)
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id  (:id is a placeholder for the contact we want to update)
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id  (:id is a placeholder for the contact we want to delete)
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
