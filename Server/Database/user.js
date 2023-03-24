const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: String,
    Task: [{ type: mongoose.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = {
  User,
};
