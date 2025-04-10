const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect();
    } catch (error) {
        console.error(error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
