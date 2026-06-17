const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("First Milestone");
});

app.listen(3500, () => {
  console.log("Server is running properly...!");
});
