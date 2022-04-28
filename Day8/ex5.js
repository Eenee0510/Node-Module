const request = require("request");
const http = require("http");
const fse = require("fs-extra");

http
  .createServer(function(req, res) {
    if (req.url === "/ghibli=films") {
      request(
        "https://ghibliapi.herokuapp.com/films",
        (error, response, body) => {
          if (response) {
            const films = JSON.parse(body);
            console.log(films);
            const tableStart = `<table>`;
            const tableEnd = `</table>`;
            let filmData = "";
            films.map((e) => {
              filmData =
                filmData +
                `
      <tr>
        <td>${e.title}</td>
        <td><img src = "${e.image}" style = "width: 100px"></td>
        <td>${e.species}</td>
      </tr>`;
            });
            let allData = tableStart + filmData + tableEnd;
            res.end(allData);
          }
        }
      );
    }
  })
  .listen(3000);
