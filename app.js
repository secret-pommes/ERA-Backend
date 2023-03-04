const express = require("express");
const app = express();
const config = require("./config/serverconfig.json");

var serverport = config.Server.ServerPort;

app.listen(serverport, () => {
    console.log(`[Backend] Started listening on port: ${serverport}`);
  })
  .on("error", (err) => {
    if (err.code == "EADDRINUSE") {
      console.log(
        `Can't bind port!\n\nSomething is already listening on port ${serverport}\n\nServer will close in 3 seconds!`
      );
      setTimeout(() => {
        console.log("Server Closed");
      }, 5000);
    }
});

app.use(require("./struct/endpoints.js"));
app.use(require("./struct/EraV1.js"));
// KEEP THIS AT THE END OF THE CODE (if you ignore it the backend will not work)
app.use(require("./struct/errors.js"));