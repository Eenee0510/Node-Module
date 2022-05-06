const express = require("express");
const app = express();
const logStuff = require("./log");
app.use(express.json());
app.get(
  "/user/:id",
  function (req, res, next) {
    const user_id = req.params.id;
    if (user_id > 2000) next("route");
    if (user_id < 50) next();
    res.send("I will send user information #1");
  },
  function (req, res, next) {
    res.send("I will send user information #1.1");
  }
);
app.get("/user/:id", function (req, res) {
  res.send("I will send user information #2");
});

app.get("/arrayuser/:id", logStuff, function (req, res, next) {
  res.send("User Info");
});
app.listen(3000);
