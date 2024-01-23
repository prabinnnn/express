const Router = require("express").Router();

Router.get("/:fname", (req, res) => {
  const fname = req.params.fname;
  res.json({ mag: `hello from book ${fname}` });
});

module.exports = Router;
