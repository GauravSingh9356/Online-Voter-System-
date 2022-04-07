const express = require('express');
const { register, signIn } = require('../Controllers/authController');
const { standForElection } = require('../Controllers/electionController');
const checkAuth = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/register').post(register);
router.route('/signIn').post(signIn);

router.route('/standForElection', checkAuth, standForElection);

module.exports = router;
