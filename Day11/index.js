const express = require("express");
const fs = require("fs");
const app = express();

const { body, validationResult } = require("express-validator");

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
app.post(
  "/register",
  body("email").isEmail(),
  body("name").isString(),
  body("phone").isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      res.send("yes!!!");
    }
  }
);
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/404", function (req, res) {
  res.render("404", { message: "OOPSIE!!! " });
});

app.listen(3000);
