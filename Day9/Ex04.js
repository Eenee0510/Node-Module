const express = require("express");
const request = require("request");
const fs = require("fs");
const app = express();
app.get("/get-data", (req, res) => {
  fs.readFile("./Data/data.csv", "utf8", function (err, data) {
    let dataArray = data.split(/\r?\n/);
    res.send(dataArray);
  });
});
app.listen(3000);
