const Player = require('../models/players');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.addPlayer = (req, res) => {
    const player = new Player(req.body);
    console.log(req.body);
    player.save((err, player) => {
        if (err) {
			return res.status(400).json({
				err: errorHandler(err),
			});
        }
        res.json({
            player,
        })
    });
};

exports.getPlayers = (req, res) => {
    Player.find().exec((err, players) => {
        if (err) {
            res.status(400).json({
                error: 'players not found'
            });
        }
        res.json(players)
    });
};
