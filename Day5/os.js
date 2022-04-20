var http = require("http");
var os = require("os");
const obj = {
  type: `${os.type()}`,
  arch: `${os.arch()}`,
  homedir: `${os.homedir()}`,
  hostname: `${os.hostname()}`,
  time: `${os.uptime()}`,
};
// let data = [];
// const obj = JSON.parse(Buffer.concat(data).toString());
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(obj));
    response.end();
  })
  .listen(3000);

console.log("server is started at localhost:3000");
