const { verifyToken } = require("../services/authService");

module.exports = () => (req, res, next) => {
    if (req.cookies.token) {
        try {
            const userData = verifyToken(req.cookies.token);
            req.user = userData;
        } catch (err) {
            console.log('Invalid token:', err.message);
            res.clearCookie('token'); // Clear the cookie if token is invalid
            req.user = null; // Set user to null if token is invalid
        }
    }

    next();
}