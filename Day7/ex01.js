const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      eventEmitter.emit("message");
    }
    res.end();
  })
  .listen(3000);

eventEmitter.on("message", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа");
});
