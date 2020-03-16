const express = require('express');
const router = express.Router();

// import validator
const { playerValidator } = require('../validator/app');

// Import controllers
const {
    addPlayer,
    getPlayers
} = require('../controllers/player');

const {
    requiredSignIn,
    isAuth,
    userById
} = require('../controllers/user');

router.post('/addplayer/:userId', playerValidator, requiredSignIn, isAuth, addPlayer);
router.get('/getplayers/:userId', requiredSignIn, isAuth, getPlayers);

router.param('userId', userById)

module.exports = router;
