const express = require("express");
const { CreateSprint } = require("../Controller/Sprint");

const SprintRouter = express.Router();

SprintRouter.get("/hello", async (req, res) => {
  res.send({ message: "hello" });
});
SprintRouter.post("/create_sprint", CreateSprint);

module.exports = {
  SprintRouter,
};
