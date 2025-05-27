const express = require('express');
const session = require('./middlewares/session');
const trim = require('../middlewares/trim');
const hbs = require('express-handlebars').create({
    extname: '.hbs',
});

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(trim());
    app.use(session());
}
