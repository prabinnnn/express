const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ msg: "dssdcdcjsdncscnjcdjncs" });
});
app.listen(3000, () => {
  console.log("app is runing");
});
