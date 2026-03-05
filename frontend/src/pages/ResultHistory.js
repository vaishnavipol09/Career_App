import {useEffect,useState} from "react"
import Navbar from "../components/Navbar"

function ResultHistory(){

const [results,setResults] = useState([])

useEffect(()=>{

const userId = localStorage.getItem("userId")

if(!userId){
console.log("User not logged in")
return
}

fetch(`http://localhost:5000/api/result/history/${userId}`)
.then(res=>res.json())
.then(data=>setResults(data))

},[])

return(

<div>

<Navbar/>

<div className="result-container">

<h2>Your Test History</h2>

{results.map((r,index)=>(
<div key={index}>

<p>Career: {r.career}</p>
<p>Score: {r.score}</p>

</div>
))}

</div>

</div>

)

}

export default ResultHistory