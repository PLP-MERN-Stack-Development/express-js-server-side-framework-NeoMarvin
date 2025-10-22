const mongoose = require('mongoose');
const dotenv = require('dotenv');

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected')
    } catch (error) {
        console.error( 'Dtabase connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;