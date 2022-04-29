const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("test");
  res.send("Hello");
});

app.post("/", (req, res) => {
  console.log(req.body);

  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      console.log(users);
      users.push(req.body);

      fs.writeFile("user.json", JSON.stringify(users), (error) => {
        if (error) {
          throw error;
        } else {
          console.log("done done done");
        }
      });
    }
  });

  res.send("added new user!");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  fs.readFile("user.json", (err, obj) => {
    if (err) {
      throw err;
    } else {
      let userobj = JSON.parse(obj);
      const filteredUser = userobj.filter((e) => {
        return e.id === Number(req.params.userId);
      });
      console.log(filteredUser);
      res.send(filteredUser);
    }
  });
});
app.listen(3000);
