const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("First Milestone");
});

app.get("/about-page", (req, res) => {
  res.send("About Page");
});

app.listen(3500, () => {
  console.log("Server is running properly...!");
});
