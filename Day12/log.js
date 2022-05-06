function logOriginalUrl(req, res, next) {
  console.log("Request URL:", req.logOriginalUrl);
  next();
}

function logMethod(req, res, next) {
  console.log("Request Type:", req.logMethod);
  next();
}

module.exports = [logOriginalUrl, logMethod];
