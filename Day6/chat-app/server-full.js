const fs = require("fs");
const http = require("http");
const EventEmitter = require("events");
const chatEmitter = new EventEmitter();

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.end(`<h1>Chat app</h1>`);
    }
    if (request.url === "/sse") return respondSSE(request, response);
    if (request.url.match(/^\/static/)) return respondStatic(request, response);
    if (request.url.match(/^\/chat/)) return respondChat(request, response);
  })
  .listen(3000);
function respondChat(request, response) {
  const message = request.url.split("?message=")[1];
  console.log(message);
  chatEmitter.emit("message", message);
  response.end();
}

function respondStatic(request, response) {
  const filename = `${__dirname}/public/${request.url.split("static")[1]}`;
  fs.createReadStream(filename)
    .on("error", () => response.end("Not Found"))
    .pipe(response);
}

function respondSSE(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  const onMessage = (msg) => response.write(`data: ${msg}\n\n`);
  chatEmitter.on("message", onMessage);
  response.on("close", () => {
    chatEmitter.off("message", onMessage);
  });
}
