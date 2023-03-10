const express = require("express");
const app = express();

app.get("*", (req, res) => {
  var XEpicErrorName = "errors.com.epicgames.common.not_found";
  var XEpicErrorCode = 1004;

  res.set({
    "X-Epic-Error-Name": XEpicErrorName,
    "X-Epic-Error-Code": XEpicErrorCode,
  });
  res.status(404); // sends 404
  res.json({
    errorcode: XEpicErrorName,
    errormessage:
      "Sorry the resource you were trying to find could not be found",
    numericErrorCode: XEpicErrorCode,
    originatingService: "any",
    intent: "prod",
  });
});

module.exports = app;
