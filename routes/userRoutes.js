const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/create', UserController.createUser);
router.get('/all', UserController.getAllUsers);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
