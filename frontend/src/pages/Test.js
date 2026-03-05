import React,{useState} from "react";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";
import {useNavigate} from "react-router-dom";

const questions = [

"Are you enjoying solving programming problems?",
"Are you like to analyzing data?",
"Have you create design?",
"How you manage teamwork?",
"Have you build web applications?"

];

function Test(){

const navigate = useNavigate();
const [score,setScore] = useState(0);
const [index,setIndex] = useState(0);

const nextQuestion = (value)=>{

setScore(score + value);

if(index + 1 < questions.length){

setIndex(index + 1);

}else{

submitTest(score + value);

}

};

const submitTest = async(finalScore)=>{

try{

const userId = localStorage.getItem("userId")

const res = await fetch("http://localhost:5000/api/result/submit",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
userId:userId,
score:finalScore
})

});

if(!res.ok){
throw new Error("API error");
}

const data = await res.json();

localStorage.setItem("career",data.career);

navigate("/result");

}catch(error){

console.log(error);

}

};

return(

<div>

<Navbar/>

<div className="test-container">

<QuestionCard
question={questions[index]}
onYes={()=>nextQuestion(1)}
onNo={()=>nextQuestion(0)}
/>

</div>

</div>

)

}

export default Test;