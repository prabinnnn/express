const router = require("express").Router();
const bookrouter = require("./book.route");
const blogrouter = require("./blog.route");
const categoriesrouter = require("./categories.route");
const rolesrouter = require("./roles.route");
router.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
router.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json({ msg: `the ${sum} is ....` });
});
router.use("/book", bookrouter);
router.use("/blog", blogrouter);
router.use("/categories", categoriesrouter);
router.use("/roles", rolesrouter);
module.exports = router;
