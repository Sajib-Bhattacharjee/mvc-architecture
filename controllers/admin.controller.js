const admins = require("../models/admin.model");

const path = require("path");

exports.getAdmin = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index2.html"));
};
exports.newAdmin = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const admin = {
    name,
    age,
  };
  admins.push(admin);
  res.status(202).json({
    success: true,
    admins,
  });
};
