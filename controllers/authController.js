const { register } = require('../services/authService');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    res.render('register')
});

authController.post('/register', async (req, res) => {
    const { email, username, password, rePass } = req.body;

    try {
        if (email == '' || username == '' || password == '') {
            throw new Error('All fields required!')
        }

        if (password != rePass) {
            throw new Error('Passwords don\'t match!')
        }
        
        const token = await register(email, username, password);
        res.cookie('token', token)
        res.redirect('/')

    } catch(err) {
        res.render('register', {
            title: 'Register page',
            body: req.body,
            errors: [err.message]
        })
    }
});


module.exports = authController;