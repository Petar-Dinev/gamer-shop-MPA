const mainRouter = require('express').Router();
const homeController = require('../controllers/homeController');

module.exports = (app) => {
    mainRouter.use('/', homeController);
    app.use(mainRouter)
}