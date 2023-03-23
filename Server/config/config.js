require("dotenv").config({ path: "../.env" });
const config = {
  mongourl: process.env.mongourl,
  port: process.env.port,
};
//console.log(config);
module.exports = config;
