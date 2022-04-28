const express = require("express");
const request = require("request");
const app = express();

app.get("/api/foods", (req, res) => {
  request("https://dev-api.mstars.mn/api/foods", function(
    error,
    response,
    body
  ) {
    if (error) {
      throw error;
    } else {
      const foods = JSON.parse(body);
      console.log(foods);
      const tableStart = `<table>`;
      const tableEnd = `</table>`;
      let foodData = "";
      foods.data.map((e) => {
        foodData =
          foodData +
          `
        <tr>
          <td>${e.name}</td>
          <td>${e.price}</td>
          <td>${e.portion}</td>
          <td>${e.stock}</td>
        </tr>`;
      });
      let Data = tableStart + foodData + tableEnd;
      res.send(Data);
    }
  });
});
app.listen(5000);
