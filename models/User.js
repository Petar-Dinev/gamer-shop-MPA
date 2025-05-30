const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.index({ email: 1, username: 1 }, { collation: { locale: 'en', strength: 2 } });

const User = model('User', userSchema);

module.exports = User;