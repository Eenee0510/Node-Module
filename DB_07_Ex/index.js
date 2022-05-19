const express = require("express");
const mysql = require("mysql2");

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Academy@321",
  database: "employees",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connected successfully");
  } else {
    console.log("error!");
  }
});
app.get("/company", (req, res) => {
  const request = req.query;
  console.log(request);

  connection.query(
    `select count(*) as PositionNums from employees where emp_no in (select emp_no from titles where title = ?);`,
    [request.title],
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
