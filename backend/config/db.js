

const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MongoURL;

const connection = mongoose.connect(url);

module.exports = {connection};