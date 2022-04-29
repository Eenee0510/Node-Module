const express = require("express");
const request = require("request");
const fs = require("fs");
const app = express();
app.get("/get-data", (req, res) => {
  let data = fs.createReadStream("./Data/data.csv");
  data.on("open", function () {
    data.pipe(res);
  });
});
app.listen(3000);
