exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        })
    req.check('password', 'Password is required').notEmpty()
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
    const errors = req.validationErrors()
    if(errors){
        const error = errors.map(err => err.msg)[0]
        return res.status(400).json({ error: error })
    }
    next()
}

exports.playerValidator = (req, res, next) => {
    req.check('firstname', 'Firstname is required').notEmpty()
    req.check('lastname', 'Lastname is required').notEmpty()
    req.check('age', 'Age is required').notEmpty()
    req.check('role', 'Role is required').notEmpty()
    req.check('team', 'Team is required').notEmpty()
    req.check('position', 'Position is required').notEmpty()
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        })
    const errors = req.validationErrors()
    if(errors){
        const error = errors.map(err => err.msg)[0]
        return res.status(400).json({ error: error })
    }
    next()
};
