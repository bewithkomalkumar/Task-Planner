const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    type: String,
    status: Boolean,
    assigned: { type: mongoose.Types.ObjectId, ref: "User" },
    desc: String,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = {
  Task,
};
