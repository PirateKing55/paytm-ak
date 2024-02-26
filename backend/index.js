const express = require("express");
const rootRouter = require("./routes/index");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", rootRouter);

app.listen(3000, function (err) {
  if (err) console.log(err);
  console.log("Server listening on Port 3000");
});
