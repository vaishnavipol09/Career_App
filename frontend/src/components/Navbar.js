import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

const logout = () => {
localStorage.removeItem("token");
window.location.href = "/";
};

return (

<nav className="navbar">

<h2>Career App</h2>

<div>

<Link to="/dashboard">Dashboard</Link>
<Link to="/test">Test</Link>
<Link to="/result">Result</Link>
<Link to="/history">History</Link>

<button onClick={logout}>Logout</button>

</div>

</nav>

);

}

export default Navbar;