const express = require("express");
const { getuser } = require("../Controller/Users");

const UserRouter = express.Router();

UserRouter.get("/:id", getuser);

module.exports = {
  UserRouter,
};
