const { default: mongoose, connect } = require("mongoose");
require("dotenv").config()

exports.connect = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017");
        if (connection) {
            console.log("DB connected successfully");
        }
    } catch (error) {
        console.log("failed to connect to DB");
    }
}

