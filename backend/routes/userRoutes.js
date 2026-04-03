const express = require('express');
const { registerUser, loginUser, getUserData } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/data', protect, getUserData)

module.exports = router;