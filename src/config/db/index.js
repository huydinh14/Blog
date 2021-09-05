const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Huy_Education_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect };
