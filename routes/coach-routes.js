const express = require('express');
const router = express.Router();

// Import controllers
const {
    coachById,
    addCoach,
    getCoach,
    getCoaches,
    updateCoach,
    deleteCoach
} = require('../controllers/coach');

const {
    requiredSignIn,
    isAuth,
    userById
} = require('../controllers/user')

router.post('/addcoach/:userId', requiredSignIn, isAuth, addCoach);
router.get('/getcoach/:coachId/:userId', requiredSignIn, isAuth, getCoach);
router.get('/getcoaches/:userId', requiredSignIn, isAuth, getCoaches);
router.put('/updatecoach/:coachId/:userId', requiredSignIn, isAuth, updateCoach);
router.delete('/deletecoach/:coachId/:userId', requiredSignIn, isAuth, deleteCoach);

router.param('userId', userById);
router.param('coachId', coachById)

module.exports = router
