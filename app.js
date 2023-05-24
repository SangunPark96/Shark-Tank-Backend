const express = require("express");
const cors = require("cors")
const app = express();
const pitchController = require("./controllers/pitchController.js")
const investmentController = require("./controllers/investmentController.js")

app.use(cors());
app.use(express.json());

  
app.get("/", (req, res) => {
    res.send("welcome to the server")
})

app.use('/pitches', pitchController)
app.use('/investments', investmentController)

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app
