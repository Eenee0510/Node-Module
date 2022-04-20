var url = require("url");
var adr = "https://dev-api.mstars.mn/api/foods";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q);
