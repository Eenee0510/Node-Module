const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

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

app.put("/employees", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  connection.query(
    `update orders set requiredDate = ${req.body.date} where orderNumber = ${req.query.orderNumber}`,

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
