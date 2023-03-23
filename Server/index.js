require("dotenv").config();
const express = require("express");
const connectDatabase = require("./Database/db");
const cors = require("cors");
const config = require("./config/config");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(config.port, () => {
  connectDatabase();
  console.log(`Server is running on http://localhost:${config.port}`);
});
