module.exports = () => {
    return (req, res, next) => {
        if (typeof req.body === 'object') {
            for (const key in req.body) {
                if (typeof req.body[key] === 'string') {
                    req.body[key] = req.body[key].trim();
                }
            }
        }
        next();
    };
}