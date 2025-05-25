const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/gamer-shop';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString)
        console.log('Database connected successfully');
    } catch(err) {
        console.log(err.message);
        process.exit(1); // Exit the process with failure
    }
}