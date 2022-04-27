const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const https = require("https");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/films") {
      eventEmitter.emit("films");
    }
    res.end();
  })
  .listen(3001);
eventEmitter.on("films", () => {
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      console.log(chunk);
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      console.log(films);

      fs.writeFile("films.json", JSON.stringify(films), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("success.");
        }
      });
    });
  });
});
