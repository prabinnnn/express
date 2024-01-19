const express = require("express");
const app = express();
app.get("/", (res, req) => {
  res.json({ msg: "idcscdsnjcndsjcnsdcsdn" });
});
app.listen(7777, () => {
  console.log("app is running");
});
