const app = require("./src/app");

app.get("/", (req, res) => {
  // we can access the data which is coming from frontend using req method
  res.send("First Milestone");
});

app.get("/about-page", (req, res) => {
  res.send("About Page");
});

app.listen(3500, () => {
  console.log("Server is running properly...!");
});
