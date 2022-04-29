const express = require("express");
const request = require("request");
const app = express();
app.get("/", (req, res) => {
  console.log("сайн байна уу, намайн Ээнээ гэнэ");
  const message = `<h1>Сайн байна уу, намайг Ээнээ гэдэг</h1>`;
  res.send(message);
});
app.listen(3000);
