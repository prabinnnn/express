const Router = require("express").Router();
const bookrouter = require("./book.route");
const blogrouter = require("./blog.route");
const categoriesrouter = require("./categories.route");
const rolesrouter = require("./roles.route");
Router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
Router.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json({ msg: `the ${sum} is ....` });
});
Router.use("/book", bookrouter);
Router.use("/blog", blogrouter);
Router.use("/categories", categoriesrouter);
Router.use("/roles", rolesrouter);

module.exports = Router;
