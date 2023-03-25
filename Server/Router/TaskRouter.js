const express = require("express");
const { CreateTask, toggleStatus } = require("../Controller/Task");

const TaskRouter = express.Router();

TaskRouter.post("/create_task", CreateTask);
TaskRouter.post("/update_status", toggleStatus);
module.exports = {
  TaskRouter,
};
