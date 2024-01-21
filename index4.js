const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
app.get("/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.json({ msg: `the ${sum} is ....` });
});
app.listen(7000, () => {
  console.log("app is running");
});
