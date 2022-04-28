const request = require("request");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const http = require("http");
const fse = require("fs-extra");

http
  .createServer(function(req, res) {
    if (req.url === "/films") {
      eventEmitter.emit("films-show");
    }
    res.end();
  })
  .listen(3000);

eventEmitter.on("films-show", () => {
  request("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
    if (error) console.log(error);
    console.log(response.statusCode);

    fse.writeJson("films.json", body, { name: "fs-extra" }, (err) => {
      if (err) return console.error(err);
      console.log("success!");
    });
  });
});
