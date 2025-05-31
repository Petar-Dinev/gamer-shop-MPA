const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const gamesController = require('../controllers/gamesController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController)
    app.use('/games', gamesController);
}