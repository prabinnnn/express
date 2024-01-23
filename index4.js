const express = require("express");
const indexofRouter = require("./routes");
const app = express();
app.use("/", indexofRouter);

app.listen(7000, () => {
  console.log("app is running");
});
