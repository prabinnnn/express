const Router = require("express").Router();

Router.get("/:fname?:lname", (req, res) => {
  const data = req.params.fname;
  const data1 = req.params.lname;
  res.json(`name is ${data} ${data1}`);
});

module.exports = Router;
