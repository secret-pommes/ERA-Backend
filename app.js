const express = require("express");
const app = express();
const config = require("./config/serverconfig.json");

const serverport = config.Server.ServerPort;

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


if(config["ERA-V1"]["Support Old Era"] == true){
  app.use(require("./struct/backend.js")) // starts backend for era v1
  app.use(require("./struct/v1_content.js")) // content pages for era v1 (backend)
}
app.use(require("./struct/endpoints.js"));
app.use(require("./struct/errors.js"));