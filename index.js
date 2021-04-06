const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/gtm", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "gtm.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
