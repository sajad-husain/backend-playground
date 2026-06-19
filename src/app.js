const express = require("express");

const app = express(); // when we call this function we create a instance of express and than store in app variable.
express.json(); // middleware is required to handle json data

const notes = [];

app.post("/notes", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  const note = {
    title: title,
    description: description,
  };
});

module.exports = app;
