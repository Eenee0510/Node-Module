const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const https = require("https");
const fs = require("fs");
const { stringify } = require("querystring");

http
  .createServer(function (req, res) {
    if (req.url === "/films/show") {
      eventEmitter.emit("films-show");
    }
    res.end();
  })
  .listen(3002);
eventEmitter.on("films-show", () => {
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
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
      </tr>`;
      });
      let allData = tableStart + filmData + tableEnd;
      fs.writeFile("films.html", allData, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("success.");
        }
      });
    });
  });
});
