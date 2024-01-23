const Router = require("express").Router();

Router.get("/a/b", (req, res) => {
  const { a, b } = req.params;
  const del = a - b;
  const multi = a * b;
  res.json(`the mul n sub is ${multi} ${del}`);
});

module.exports = Router;
