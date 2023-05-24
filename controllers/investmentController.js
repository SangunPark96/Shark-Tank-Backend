const express = require("express");
const investments = express.Router();
const { getAllInvestments } = require("../queries/investments");


// index
investments.get("/", async (req, res) => { 
    const { error, result } = await getAllInvestments();
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
module.exports = investments