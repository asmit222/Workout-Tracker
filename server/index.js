const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const expressStaticGzip = require("express-static-gzip");
const request = require("request");
require("dotenv").config();

const db = require("../database");

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Allow CORS for all origins
app.use(
  cors({ origin: "*", preflightContinue: false, optionsSuccessStatus: 204 })
);

// ✅ Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Serve static assets for production
if (process.env.NODE_ENV === "production") {
  app.use(expressStaticGzip(path.join(__dirname, "..", "public", "dist"), {}));
}
app.use(express.static(path.join(__dirname, "..", "public", "dist")));

// ✅ Root health check route
app.get("/", (req, res) => {
  res.status(200).send("🚀 App is running on Railway!");
});

// ✅ Manifest & static assets
app.get("/manifest.json", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "manifest.json"));
});

[
  "logo180.png",
  "logo225.png",
  "logo192.png",
  "logo512.png",
  "favicon.ico",
].forEach((file) => {
  app.get(`/${file}`, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", file));
  });
});

app.get("/workbox-fe7d1311.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "workbox-fe7d1311.js"));
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "service-worker.js"));
});

// ✅ API routes
app.post("/getWorkouts", (req, res) => {
  db.getWorkouts(JSON.stringify(req.body), (data) => res.json(data || []));
});

app.post("/test", (req, res) => {
  db.saveWorkout(JSON.stringify(req.body), () => console.log("Saved workout!"));
  res.send("done");
});

app.post("/createTemplate", (req, res) => {
  db.addTemplate(JSON.stringify(req.body), () =>
    console.log("Added template!")
  );
  res.send("done");
});

app.post("/getTemplates", (req, res) => {
  db.getTemplates(JSON.stringify(req.body), (data) => res.json(data || []));
});

app.post("/createAccount", (req, res) => {
  db.createAccount(JSON.stringify(req.body), (data) => res.json(data || []));
});

app.post("/attemptLogin", (req, res) => {
  db.attemptLogin(JSON.stringify(req.body), (data) => res.json(data || []));
});

app.post("/deleteTemplate", (req, res) => {
  db.deleteTemplate(req.body, (data) => res.json(data || []));
});

app.post("/changeColor", (req, res) => {
  db.changeColor(req.body, (data) => res.json(data || []));
});

app.post("/deleteWorkout", (req, res) => {
  db.deleteWorkout(req.body, (data) => res.json(data || []));
});

app.post("/submitRun", (req, res) => {
  db.submitRun(req.body, (data) => res.json(data || []));
});

app.post("/getRunData", (req, res) => {
  db.getRunData(JSON.stringify(req.body), (data) => res.json(data || []));
});

app.post("/savePR", (req, res) => {
  db.submitPR(req.body, (data) => res.json(data || []));
});

app.post("/getPRs", (req, res) => {
  db.getPRs(req.body, (data) => res.json(data || []));
});

app.post("/deletePR", (req, res) => {
  db.deletePR(req.body, (data) => res.json(data || []));
});

app.post("/updatePR", (req, res) => {
  db.updatePR(req.body, (data) => res.json(data || []));
});

// ✅ YouTube API
const API_KEY =
  process.env.YT_API_KEY || "AIzaSyBL3-BSNp2ldFECHQ36SsyO_l-AHwRHLH0";
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(API_KEY);

app.get("/getYoutubeVideo/:searchString", (req, res) => {
  youtube
    .searchVideos(`how to ${req.params.searchString} tutorial`, 10)
    .then((results) => res.send(results))
    .catch((err) => {
      console.error(err);
      res.status(500).send("YouTube API error");
    });
});

// ✅ Start server (bind to 0.0.0.0 for Railway)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
