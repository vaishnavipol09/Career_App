import {useState} from "react";

function Register(){

const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const handleSubmit = async(e)=>{
e.preventDefault();

await fetch("http://localhost:5000/api/auth/register",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)

})

alert("Registered Successfully")

}

return(

<div className="register-container">

<h2 className="register-header">Register</h2>

<form onSubmit={handleSubmit}>

<input placeholder="Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input type="password"
placeholder="Password"
onChange={(e)=>setForm({...form,password:e.target.value})}
/>

<button className="register-button">Register</button>
<p style={{marginTop:"15px"}}>
Already have an account? <a href="/">Login</a>
</p>

</form>

</div>

)

}

export default Register