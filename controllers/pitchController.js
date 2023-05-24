const express = require("express");
const pitches = express.Router();

const { 
    getPaginatedPitches,
    getPitch, 
    createPitch, 
    updatePitch, 
    deletePitch} = require('../queries/pitches.js')







// paginated index
pitches.get("/", async (req, res) => { 
    const pageNumber = req.query.page
    console.log(req.query)
    const { error, result } = await getPaginatedPitches(pageNumber);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  

  // show
pitches.get("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await getPitch(id);
    if (error?.code === 0) {
      res.status(404).json({ error: "Pitch not found" });
    } else if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  // create
pitches.post("/", async (req, res) => {
    const { error, result } = await createPitch(req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(201).json(result);
    }
  });

  // update 
pitches.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await updatePitch(id, req.body);
    if (error) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(result);
    }
  });
  
  //delete
pitches.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const { error, result } = await deletePitch(id);
    if (error) {
      res.status(404).json("Project not found");
    } else {
      res.status(201).json(result);
    }
  });
  
  module.exports = pitches