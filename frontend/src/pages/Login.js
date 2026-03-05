import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const login = async(e)=>{

e.preventDefault()

const res = await fetch("http://localhost:5000/api/auth/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

})

const data = await res.json()

// user not authorized
if(!res.ok){
alert(data.msg || "Invalid Email or Password")
navigate("/register")
return
}

// authorized user
localStorage.setItem("token",data.token)
localStorage.setItem("userId",data.user._id)

navigate("/dashboard")

}

return(
<div className="auth-page">   

<div className="login-container">

<h2 className="login-container-header">Login</h2>

<form onSubmit={login}>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="login-button">Login</button>

</form>

<p style={{marginTop:"15px"}}>
Don't have an account? <a href="/register">Register</a>
</p>

</div>
</div> 

)

}

export default Login