const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let a = 2;
  let b = 3;

  let sum = a + b;

  res.json({ msg: "14dgf45w12dfhgj", sum: sum });
});

app.listen(4000, () => {
  console.log("App is running on port 4000");
});
