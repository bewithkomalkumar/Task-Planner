const { Task } = require("../Database/task");

const CreateTask = async (req, res) => {
  const { type, assigned, desc } = req.body;

  try {
    const task = await Task.create({ type, assigned, desc, status: false });

    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send({ task: [], message: "Internal Error" });
  }
};

const toggleStatus = async (req, res) => {
  const { id } = req.body;
  try {
    const task = await Task.findById(id);
    const data = await Task.create({
      type,
      assigned,
      desc,
      status: task.status ? false : true,
    });

    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ data: [], message: "Internal Error" });
  }
};
module.exports = {
  CreateTask,
  toggleStatus,
};
