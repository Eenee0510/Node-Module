var https = require("https");
var http = require("http");
const { table } = require("console");

http
  .createServer((req, res) => {
    if (req.url.match(/^\/ghibli/)) {
      if (req.url.split("=")[1] === "films") {
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
      } else if (req.url.split("=")[1] === "people") {
        https.get("https://ghibliapi.herokuapp.com/people", (response) => {
          let data = [];
          response.on("data", (chunk) => {
            data.push(chunk);
          });
          response.on("end", () => {
            const films = JSON.parse(Buffer.concat(data).toString());
            const tableStart = `<table>`;
            const tableEnd = `</table>`;
            let peopleData = "";
            films.map((e) => {
              peopleData =
                peopleData +
                `
                          <tr>
                            <td>${e.name}</td>
                            <td>${e.gender}</td>
                            <td>${e.age}</td>
                          </tr>`;
            });
            let allData = tableStart + peopleData + tableEnd;
            res.end(allData);
          });
        });
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Not Found");
      res.end();
    }
  })
  .listen(3000);
