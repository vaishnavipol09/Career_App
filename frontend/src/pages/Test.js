import React,{useState} from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";
import {useNavigate} from "react-router-dom";

const questions = [

{question:"Do you enjoy coding?", type:"interest"},
{question:"Are you good at logical reasoning?", type:"aptitude"},
{question:"Do you prefer analytical thinking?", type:"personality"},
{question:"Have you create design?", type:"values"},
{question:"How you manage teamwork?", type:"leader"},
{question:"Have you build web applications?", type:"future"}

]


function Test(){

const navigate = useNavigate();
const [scores,setScores] = useState({

interest:0,
aptitude:0,
personality:0,
values:0,
leader:0,
future:0

})
const [index,setIndex] = useState(0);

const nextQuestion = (value)=>{

const type = questions[index].type

const updatedScores = {
...scores,
[type]: scores[type] + value
}

setScores(updatedScores)

if(index + 1 < questions.length){

setIndex(index + 1)

}else{

submitTest(updatedScores)

}

}

const submitTest = async(updatedScores)=>{

try{

const userId = localStorage.getItem("userId")

const res = await fetch("http://localhost:5000/api/result/submit",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

userId:userId,
scores:updatedScores

})

})

const data = await res.json()

localStorage.setItem("career",data.career)

navigate("/result")

}catch(error){

console.log(error)

}

}

return(

<div>

<Navbar/>

<div className="test-container">

<QuestionCard
question={questions[index].question}
onYes={()=>nextQuestion(1)}
onNo={()=>nextQuestion(0)}
/>

</div>

</div>

)

}

export default Test;