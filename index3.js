const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});
app.get("/:fname/:lname", (req, res) => {
  const fname = req.params.fname;
  const lname = req.params.lname;
  res.json({ msg: `hello ${fname} ${lname}` });
});
app.listen(7000, () => {
  console.log("app is running");
});
