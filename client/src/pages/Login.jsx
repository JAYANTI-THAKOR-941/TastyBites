import { useState } from "react";
import api from "../services/api";

const Login = ()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res = await api.post('/user/login',{email,password});
            console.log(res.data);
            alert('User login successfully.!!');
        }
        catch(error){
            console.log(error);
        }
        setEmail("");
        setPassword("");
    }


    return(
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <input type="text" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <button>Login</button>
            </form>
        </>
    )
}

export default Login;