const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const stripe = require("./routes/stripe");

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use("/api/stripe", stripe);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Running on port 3000"));
