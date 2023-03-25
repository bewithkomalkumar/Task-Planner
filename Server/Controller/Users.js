const { User } = require("../Database/user");

const getuser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.send({ user });
  } catch (error) {
    res.status(500).send({ user: [], message: "not found or error" });
  }
};

module.exports = {
  getuser,
};
