const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    type: String,
    Status: Boolean,
    assigned: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = {
  Task,
};
