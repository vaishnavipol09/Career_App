const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const mongoose = require("mongoose");

router.post("/submit", async (req,res)=>{

try{

const {userId,scores} = req.body

let career=""

// total score calculate
const total =
scores.interest +
scores.aptitude +
scores.personality +
scores.values +
scores.leader +
scores.future

// career logic
if(total >=5 && scores.interest >=1){

career="Software Developer"

}
else if(scores.personality >=2 || scores.leader >=2){

career="Business Analyst"

}
else{

career="Creative Designer"

}

const result = new Result({

userId:new mongoose.Types.ObjectId(userId),

interest:scores.interest,
aptitude:scores.aptitude,
personality:scores.personality,
values:scores.values,
leader:scores.leader,
future:scores.future,

career

})

await result.save()

res.json(result)

}catch(err){

console.log(err)
res.status(500).json({msg:"Server Error"})

}

})


// user history
router.get("/history/:userId", async (req,res)=>{

try{

const results = await Result.find({
userId:req.params.userId
}).sort({createdAt:-1})

res.json(results)

}catch(err){

console.log(err)
res.status(500).json({msg:"Server Error"})

}

})

module.exports = router