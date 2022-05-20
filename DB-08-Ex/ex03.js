const express = require("express");
const mysql = require("mysql2");

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Academy@321",
  database: "classicmodels",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connected successfully");
  } else {
    console.log("error!");
  }
});
app.get("/order", (req, res) => {
  console.log(req.query);
  const request = req.query;
  connection.query(
    `select * from orders where orderNumber = ?`,
    [request.orderNumber],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.get;
app.listen(3000, () => {
  console.log("App is started", +3000);
});
