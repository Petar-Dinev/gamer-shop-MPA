const gamesController = require('express').Router();

gamesController.get('/', (req, res) => {
    res.render('games', {
        title: 'Catalog',
        games: []
    })
})

module.exports = gamesController;