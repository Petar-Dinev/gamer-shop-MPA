const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'asdhas5ajwseh3l2ajsdhashk2'

async function register(email, username, password) {
    const existingUserByEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (existingUserByEmail) {
        throw new Error('Email already taken!');
    }

    const hashedPassword = await brcypt.hash(password, 10);

    const user = new User({ email, username, password: hashedPassword });
    await user.save();

    return createToken(user);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isValid = await brcypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid email or password');
    }
    
    return createToken(user);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

function createToken(userData) {
    return jwt.sign(
        {
            _id: userData._id,
            email: userData.email,
            username: userData.username
        },
        JWT_SECRET,
        { expiresIn: '2d' })
}

module.exports = {
    register,
    login,
    verifyToken
}