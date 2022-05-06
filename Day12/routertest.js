const express = require("express");
const router = express.Router();

const app = express();
app.use(express.json());
app.use("/user", router);
router.get("/userinfo/:id", function (req, res, next) {
  res.send("User Info with ID");
});
router.use("/user", function (req, res, next) {
  res.send("User Info");
});
router.get("/userid/:id", function (req, res, next) {
  const id = req.params.id;
  if (id < 0) {
    const err = new Error("Cant't find user with this ID!");
    err.status = "fail";
    err.statusCode = 500;
    return next(err);
  }
  res.send("User Info with ID" + id);
});
app.listen(3001);
