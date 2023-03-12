// packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// routes
const stripe = require("./routes/stripe");
app.use("/api/stripe", stripe);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT ? process.env.PORT : "3000";

app.listen(PORT || 3000, () => console.log("Running on port " + PORT));
