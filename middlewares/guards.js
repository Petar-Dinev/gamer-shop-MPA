function hasUser () {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login')
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if(!req.user) {
            next();
        } else {
            res.redirect('/');
        }
    }
}

module.exports = {
    hasUser,
    isGuest
}