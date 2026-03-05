import React from "react";
import Navbar from "../components/Navbar";

function Result(){

const career = localStorage.getItem("career");

return(

<div>

<Navbar/>

<div className="result-container">

<h1>Your Career Recommendation</h1>

<h2>{career}</h2>

<p>
Based on your psychometric test this career suits your personality and skills.
</p>

</div>

</div>

)

}

export default Result;