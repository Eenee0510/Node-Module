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
app.get("/employees", (req, res) => {
  const request = req.query;
  console.log(request);

  connection.query(
    `select sum(s.salary) as SumSalaries from salaries s inner join dept_emp d on s.emp_no = d.emp_no inner join departments a on d.dept_no = a.dept_no where a.dept_name = ?`,
    [request.dept],
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
