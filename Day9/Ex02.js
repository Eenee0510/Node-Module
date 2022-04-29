const express = require("express");
const request = require("request");
const app = express();
app.get("/films", (req, res) => {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      if (error) {
        throw error;
      } else {
        const films = JSON.parse(body);
        console.log(films);
        let tablestart = `<table>`;
        let tableend = `</table>`;
        let filmData = "";
        films.map((e) => {
          filmData =
            filmData +
            `
            <tr>
              <td>${e.title}</td>
              <td>${e.original_title}</td>
              <td>${e.original_title_romanised}</td>
              <td><img src = "${e.image}" width = "100px"></td>
            </tr>`;
        });
        let allData = tablestart + filmData + tableend;
        res.send(allData);
      }
    }
  );
});
app.listen(3000);
