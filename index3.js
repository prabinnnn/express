const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
app.get("/:address", (req, res) => {
  const data = req.params.name;
  res.json({ msg: `hello ${data}` });
});
app.listen(7000, () => {
  console.log("app is running");
});
