const express = require("express");
const routes = express.Router();
routes.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
routes.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json({ msg: `the ${sum} is ....` });
});
module.exports = routes;
