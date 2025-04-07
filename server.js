// server.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Halo dari CI/CD Express!");
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
