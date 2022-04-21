var https = require("https");
var http = require("http");
const { table } = require("console");

http
  .createServer((req, res) => {
    https.get("https://ghibliapi.herokuapp.com/films", (response) => {
      let data = [];
      response.on("data", (chunk) => {
        data.push(chunk);
      });
      response.on("end", () => {
        const films = JSON.parse(Buffer.concat(data).toString());
        const tableStart = `<table>`;
        const tableEnd = `</table>`;
        let filmData = "";
        films.map((e) => {
          filmData =
            filmData +
            `
        <tr>
          <td>${e.title}</td>
          <td><img src = "${e.image}"></td>
        </tr>`;
        });
        let allData = tableStart + filmData + tableEnd;
        res.end(allData);
      });
    });
  })
  .listen(3002);
