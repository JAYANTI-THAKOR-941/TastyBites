import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = ()=>{

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res = await api.post('/user/register',{username,email,password});
            console.log(res.data);
            alert('User register successfully.!!');
        }
        catch(error){
            console.log(res.error);
        }

        setUsername("");
        setEmail("");
        setPassword("");
        navigate('/login');

    }


    return(
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                 <input type="text" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <input type="text" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                  <button>Register</button>
            </form>
        </>
    )
}

export default Register;