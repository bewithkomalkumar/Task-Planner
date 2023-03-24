const mongoose = require("mongoose");
const sprintSchema = new mongoose.Schema(
  {
    month: String,
    week: Number,
    tasks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true }
);

const Sprint = mongoose.model("Sprint", sprintSchema);
module.exports = {
  Sprint,
};
