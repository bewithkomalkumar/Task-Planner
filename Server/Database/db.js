const config = require("../config/config");
const mongoose = require("mongoose");

const connectDatabase = async () => {
  const db = await mongoose.connect(config.mongourl);
  return db;
};

module.exports = connectDatabase;
