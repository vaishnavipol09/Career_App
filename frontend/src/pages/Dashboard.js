import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard(){

return(

<div>

<Navbar/>

<div className="dashboard">

<h1>Welcome to Career Assessment</h1>

<p>
Take the psychometric test to discover your best career path.
</p>

<Link to="/test">
<button>Start Test</button>
</Link>

</div>

</div>

)

}

export default Dashboard;