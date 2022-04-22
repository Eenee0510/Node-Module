var http = require("http");
var os = require("os");
const obj = {
  Platform: `${os.platform()}`,
  Architecture: `${os.arch()}`,
  Totalmemory: `${os.totalmem()}`,
  Totalcpus: `${os.cpus()}`,
  Freememory: `${os.freemem()}`,
};

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(obj));
    response.end(); 
  })
  .listen(3000);

console.log("server is started at localhost:3000");
console.log(
  `Your Operating System: ${os.release()}=${os.arch()} ${os.type()} ${
    (os.freemem() * 100) / os.totalmem()
  }% of your RAM is free.`
);
