const { Sprint } = require("../Database/sprint");

const CreateSprint = async (req, res) => {
  const { month, week } = req.body;

  try {
    const sprint = await Sprint.create({ month, week: Number(week) });

    res.status(200).send({ sprint });
  } catch (error) {
    res.status(500).send({ message: "Error", sprint: [] });
  }
};

module.exports = {
  CreateSprint,
};
