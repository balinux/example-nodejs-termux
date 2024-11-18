const express = require("express");
const app = express();
const path = require("path");

// setup file statis dari folder public
app.use(express.static(path.join(__dirname, "public")));

app.get("api/v1/users", (req, res) => {
  res.json({
    status: 200,
    message: "success",
    data: {
      name: "rio",
      gender: "men",
    },
  });
});
const port = 3030;
// Menghubungkan WebSocket ke server HTTP Express
app.server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
