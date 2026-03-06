import React from "react"
import Navbar from "../components/Navbar"

import {
Bar
} from "react-chartjs-2"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

function Result(){

const career = localStorage.getItem("career")

const careerMatches = [

{
name:"Software Developer",
fit:90
},

{
name:"Business Analyst",
fit:75
},

{
name:"Creative Designer",
fit:60
}

]

const chartData = {

labels:careerMatches.map(c=>c.name),

datasets:[

{
label:"Career Fit %",
data:careerMatches.map(c=>c.fit),
backgroundColor:[
"#4a6cf7",
"#00c9a7",
"#ff7a7a"
]
}

]

}

const careerInfo = {

"Software Developer":{

why:"Your logical thinking, interest in technology and problem solving ability indicate a strong match with software development.",

stream:"Science (PCM)",

courses:[
"B.Tech Computer Science",
"BCA",
"MCA",
"Full Stack Development"
],

skills:[
"JavaScript",
"React",
"Node.js",
"Problem Solving"
],

backup:[
"Data Analyst",
"Cloud Engineer",
"Cyber Security"
]

},

"Business Analyst":{

why:"Your analytical thinking and communication skills suggest strong potential in business analysis.",

stream:"Commerce / Business Studies",

courses:[
"BBA",
"MBA",
"Business Analytics"
],

skills:[
"Excel",
"SQL",
"Data Analysis"
],

backup:[
"Project Manager",
"Product Manager"
]

},

"Creative Designer":{

why:"Your creativity and design thinking indicate strong potential in creative design.",

stream:"Arts / Design",

courses:[
"B.Des",
"Graphic Design",
"UI UX Design"
],

skills:[
"Figma",
"Photoshop",
"Creativity"
],

backup:[
"Animator",
"Content Creator"
]

}

}

const selectedCareer = careerInfo[career]

return(

<div>

<Navbar/>

<div className="result-container">

<h2>Top 3 Career Matches</h2>

<ul>

{careerMatches.map((c,index)=>(
<li key={index}>
{c.name} – {c.fit}%
</li>
))}

</ul>

<h2>Career Fit Graph</h2>

<Bar data={chartData} />

<h3>Top Career: {career}</h3>

<h3>Why This Career Matches You</h3>

<p>{selectedCareer.why}</p>

<h3>Recommended Subject Stream</h3>

<p>{selectedCareer.stream}</p>

<h3>Courses</h3>

<ul>
{selectedCareer.courses.map((course,index)=>(
<li key={index}>{course}</li>
))}
</ul>

<h3>Skills to Develop</h3>

<ul>
{selectedCareer.skills.map((skill,index)=>(
<li key={index}>{skill}</li>
))}
</ul>

<h3>Backup Careers</h3>

<ul>
{selectedCareer.backup.map((career,index)=>(
<li key={index}>{career}</li>
))}
</ul>

<h3>5 Year Action Plan</h3>

<ul>

<li>Year 1: Learn fundamentals</li>
<li>Year 2: Build projects</li>
<li>Year 3: Internship</li>
<li>Year 4: Specialization</li>
<li>Year 5: Professional career</li>

</ul>

</div>

</div>

)

}

export default Result