const express = require("express");

const app = express(); // when we call this function we create a instance of express and than store in app variable.

const notes = [];

app.post("/notes", (req, res) => {
  const { title, id, description } = req.body;
  console.log(req.body);
  const note = {
    id: id,
    title: title,
    description: description,
  };
});

module.exports = app;
