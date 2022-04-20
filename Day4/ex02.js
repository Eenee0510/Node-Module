var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(
      `<h1>I'm doing Day 4 Ex02...</h1>
      <p>Here is Paragraph text.</p>
      <ol><li>a</li><li>b</li><li>c</li></ol>
      <ul><li>e</li><li>f</li><li>g</li></ul>`
    );
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
