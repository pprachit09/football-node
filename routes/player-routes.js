const express = require('express');
const router = express.Router();

// Import controllers
const {
    playerById,
    getPlayer,
    addPlayer,
    getPlayers,
    deletePlayer,
    updatePlayer
} = require('../controllers/player');

const {
    requiredSignIn,
    isAuth,
    userById
} = require('../controllers/user');

router.get('/getplayer/:playerId/:userId', requiredSignIn, isAuth, getPlayer);
router.post('/addplayer/:userId', requiredSignIn, isAuth, addPlayer);
router.get('/getplayers/:userId', requiredSignIn, isAuth, getPlayers);
router.delete('/deleteplayer/:playerId/:userId', requiredSignIn, isAuth, deletePlayer);
router.put('/updateplayer/:playerId/:userId', requiredSignIn, isAuth, updatePlayer);

router.param('userId', userById);
router.param('playerId', playerById);

module.exports = router;
