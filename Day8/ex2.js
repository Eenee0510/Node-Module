const request = require("request");

request("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
  if (error) console.log(error);
  console.log(response.statusCode);
  console.log(body);
});
