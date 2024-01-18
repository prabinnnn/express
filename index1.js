const express = require("express");
const libaray = require("./lib");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "prandcnsdmcbsdhcbdshcbds" });
  libaray(2, 3); // Call the libaray function
});

app.listen(6666, () => {
  console.log("app is running on port 6000");
});
