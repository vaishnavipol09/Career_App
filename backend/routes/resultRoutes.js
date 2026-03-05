const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const mongoose = require("mongoose");

router.post("/submit", async (req,res)=>{

try{

const {userId,score} = req.body;

let career="";

if(score >=8){
career="Software Developer"
}else if(score>=5){
career="Business Analyst"
}else{
career="Creative Designer"
}

const result = new Result({
userId: new mongoose.Types.ObjectId(userId),
score,
career
})

await result.save()

res.json(result)

}catch(err){

console.log(err)
res.status(500).json({msg:"Server Error"})

}

})

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