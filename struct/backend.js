const express = require("express");
const app = express();
const path = require("path");

const config = require("../config/serverconfig.json");
const version = config["ERA-V1"].Version;

const keychain = path.join(__dirname, "/../json/keychain.json");
const cosmetics = path.join(__dirname, "/../json/cosmetics.json");
const shops = path.join(__dirname, "/../json/shops.json");

app.get("/", async (req, res) => {
  // old era page (archive)
  res.redirect(
    "https://web.archive.org/web/20210716173925/https://erafn.glitch.me/"
  );
});

app.post("/VersionRequest", async (req, res) => {
  res.send(version);
});

app.post("/account/api/oauth/token", async (req, res) => {
  res.json({
    access_token: "projecteratoken",
    token_type: "bearer",
    expires_in: 28800,
    expires_at: "9999-12-31T23:59:59.999Z",
    deployment_id: "projecteratoken",
    organization_id: "projecteratoken",
    product_id: "prod-fn",
    sandbox_id: "fn",
  });
});

app.get("/account/api/oauth/verify", async (req, res) => {
  res.json({
    token: "projecteratoken",
    session_id: "3c3662bcb661d6de679c636744c66b62",
    token_type: "bearer",
    client_id: "projecteratoken",
    internal_client: true,
    client_service: "fortnite",
    account_id: CurrentAccount,
    expires_in: 28800,
    expires_at: "9999-12-02T01:12:01.100Z",
    auth_method: "exchange_code",
    display_name: CurrentAccount,
    app: "fortnite",
    in_app_id: CurrentAccount,
    device_id: "projecteratoken",
  });
});

app.get("/account/api/public/account/:accountId", async (req, res) => {
  res.json({
    id: req.params.accountId,
    displayName: CurrentAccount,
    name: "era",
    email: CurrentAccount + "@era.era",
    failedLoginAttempts: 0,
    lastLogin: new Date().toISOString(),
    numberOfDisplayNameChanges: 0,
    ageGroup: "UNKNOWN",
    headless: false,
    country: "US",
    lastName: "Project-Era",
    preferredLanguage: "en",
    canUpdateDisplayName: false,
    tfaEnabled: false,
    emailVerified: true,
    minorVerified: false,
    minorExpected: false,
    minorStatus: "UNKNOWN",
  });
});

app.get("/account/api/public/account", async (req, res) => {
  var accountId = req.query.accountId;
  res.json({
    id: accountId,
    displayName: "Project Era",
    externalAuths: {},
  });
});

app.get("/account/api/public/account/*/externalAuths", async (req, res) => {
  res.json([]); // empty af
});

app.delete("/account/api/oauth/sessions/kill", async (req, res) => {
  res.status(204);
  res.end();
});
app.delete("/account/api/oauth/sessions/kill/*", async (req, res) => {
  res.status(204);
  res.end();
});

app.get("/account/api/epicdomains/ssodomains", async (req, res) => {
  res.json([
    "unrealengine.com",
    "unrealtournament.com",
    "fortnite.com",
    "epicgames.com",
  ]);
});

app.get("/fortnite/api/cloudstorage/system", async (req, res) => {});
module.exports = app;
