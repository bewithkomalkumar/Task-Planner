const express = require("express");
const { CreateTask } = require("../Controller/Task");

const TaskRouter = express.Router();

TaskRouter.post("/create_task", CreateTask);

module.exports = {
  TaskRouter,
};
