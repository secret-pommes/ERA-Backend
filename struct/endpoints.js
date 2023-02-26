const express = require("express");
const app = express();
const path = require("path");

// News in launcher
app.get("/public/Launcher/launcher-defaultstrings.json", (req, res) => {
  var json = path.join(__dirname, "/../json/launcher-defaultstrings.json");
  res.sendFile(json);
});

// Home / pictures in launcher background
app.get("/public/Launcher/launcher-userinterfacesettings.json", (req, res) => {
  var json = path.join(__dirname, "/../json/launcher-userinterfacesettings.json");
  res.sendFile(json);
});

// Content pages in fortnite (eracen.danihhhhh.repl.co)
app.get("/public/fortnite-game.json", (req, res) => {
  var json = path.join(__dirname, "/../json/fortnite-game.json");
  res.sendFile(json);
});

module.exports = app;
