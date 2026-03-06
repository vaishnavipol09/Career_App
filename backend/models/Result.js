const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

interest:Number,
aptitude:Number,
personality:Number,
values:Number,
leader:Number,
future:Number,

career:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Result", resultSchema);