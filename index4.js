const express = require("express");
const indexofroutes = require("./routes");
const app = express();
app.use("/", indexRouter);

app.listen(7000, () => {
  console.log("app is running");
});
