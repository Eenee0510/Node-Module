const request = require("request");

function printFilms(str, callback) {
  request(
    "https://ghibiapi.herokuapp.com/films",
    function (error, response, body) {
      console.log(str);
    }
  );
  callback();
}
module.exports = printFilms;
