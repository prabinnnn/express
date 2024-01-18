//start with npm init -y
//2 npm i express
// update script with start:node index.js
//gitignore file and add node_modules line inside
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});
app.listen(8000, () => {
  console.log("application is running");
});
