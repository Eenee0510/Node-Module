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
app.get("/managers/salary", (req, res) => {
  const request = req.query;
  console.log(request);

  connection.query(
    `select salary,  from salaries s inner join dept_manager d on s.emp_no = d.emp_no;`,
    [request],
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

app.put("/departments", (req, res) => {
  connection.query("lock tables departments read");
  connection.query(
    "select count(*) as total from departments;",
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

app.get("/dept_emp", (req, res) => {
  connection.query(
    "select count(*) as total from dept_emp;",
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
app.get("/unlock", (req, res) => {
  connection.query("unlock tables;");
  res.send("unlocked");
});

app.get;
app.listen(3000, () => {
  console.log("App is started", +3000);
});
