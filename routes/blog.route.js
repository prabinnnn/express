const Router = require("express").Router();

Router.get("/name", (req, res) => {
  const data = req.params.name;
  res.json({ mag: `hello from book ${data}` });
});

module.exports = Router;
