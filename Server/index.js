require("dotenv").config();
const express = require("express");
const connectDatabase = require("./Database/db");
const cors = require("cors");
const config = require("./config/config");
const { User } = require("./Database/user");
const { Sprint } = require("./Database/sprint");
const { Task } = require("./Database/task");
const { SprintRouter } = require("./Router/SprintRouter");
const { TaskRouter } = require("./Router/TaskRouter");
const { UserRouter } = require("./Router/UserRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/sprint", SprintRouter);
app.use("/Addtask", TaskRouter);
app.use("/users", UserRouter);

const adduser = async () => {
  const user = {
    name: "Komal Kumar",
  };
  const sprint = {
    month: "January",
    week: 1,
  };
  const sprint1 = await Sprint.findById("641de6b01d3130b917d1919c");
  const userid = await User.findOne({ name: "Komal Kumar" });
  const task = {
    type: "Feature",
    assigned: userid._id,
    desc: "Add CURD Operation",
  };
  try {
    // const data = await User.create(user);
    //    const data = await Sprint.create(sprint);
    const data = await Task.create(task);
    // const data = await Sprint.findByIdAndUpdate("641de6b01d3130b917d1919c", {
    //   tasks: [...sprint1.tasks, userid._id],
    // });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

app.get("/sprint", async (req, res) => {
  try {
    const data = await Sprint.find();
    res.send({ data });
  } catch (error) {
    console.log(error);
    res.send({ Message: "Error Occourd" });
  }
});
app.get("/task", async (req, res) => {
  try {
    const data = await Task.find();
    res.send({ data });
  } catch (error) {
    console.log(error);
    res.send({ Message: "Error Occourd" });
  }
});
app.get("/user", async (req, res) => {
  try {
    const data = await User.find();
    res.send({ data });
  } catch (error) {
    console.log(error);
    res.send({ Message: "Error Occourd" });
  }
});

app.listen(config.port, () => {
  connectDatabase();
  console.log(`Server is running on http://localhost:${config.port}`);
  //adduser();
});
