const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

router.post("/submit", async (req, res) => {
  try {

    const { userId, score } = req.body;

    
    if (!userId || score === undefined) {
      return res.status(400).json({
        message: "userId and score are required"
      });
    }

    let career = "";

    if (score > 15) {
      career = "Software Developer";
    } 
    else if (score > 10) {
      career = "UI/UX Designer";
    } 
    else {
      career = "Business Analyst";
    }

    const result = new Result({
      userId,
      interest: "Technology",
      personality: "Analytical",
      career
    });

    const savedResult = await result.save();

    res.status(201).json({
      message: "Result saved successfully",
      data: savedResult
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server error"
    });

  }
});

module.exports = router;