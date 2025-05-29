const authController = require('express').Router();

authController.get('/register', (req, res) => {
    res.render('register')
});


module.exports = authController;