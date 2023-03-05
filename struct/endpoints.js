const express = require("express");
const app = express();
const path = require("path");
const config = require("../config/serverconfig.json");

// News and text under it (page 2) in launcher
app.get("/public/Launcher/launcher-defaultstrings.json", (req, res) => {
  var json = path.join(__dirname, "/../json/launcher-defaultstrings.json");
  res.sendFile(json);
});

// Home | pictures in launcher background
app.get("/public/Launcher/launcher-userinterfacesettings.json", (req, res) => {
  var json = path.join(
    __dirname,
    "/../json/launcher-userinterfacesettings.json"
  );
  res.sendFile(json);
});

// Content pages in fortnite
app.get("/public/fortnite-game.json", (req, res) => {
  var json = path.join(__dirname, "/../json/fortnite-game.json");
  res.sendFile(json);
});

// List with active skins (Locker)
app.get("/public/cosmetics.json", (req, res) => {
  if (config.Settings.Cosmetics.AllCosmetics == true) {
    var json = path.join(__dirname, "/../json/all_cosmetics.json");
  } else {
    var json = path.join(__dirname, "/../json/cosmetics.json");
  }
  res.sendFile(json);
});

// Keychain for project era (1.11 up to 12.41?)
app.get("/public/keychain.json", (req, res) => {
  var json = path.join(__dirname, "/../json/keychain.json");
  res.sendFile(json);
});

// Lightswitch (server-status, bans)
app.get("/public/status.json", (req, res) => {
  var json = path.join(__dirname, "/../json/lightswitch.json");
  res.sendFile(json);
});

module.exports = app;
