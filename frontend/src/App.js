import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import Result from "./pages/Result";
import ResultHistory from "./pages/ResultHistory"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/test" element={<Test/>}/>
<Route path="/result" element={<Result/>}/>
<Route path="/history" element={<ResultHistory/>} />

</Routes>

</BrowserRouter>

)

}

export default App