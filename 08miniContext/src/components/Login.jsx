import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useContext hook
    const {setUser} = useContext(UserContext)//this is from UserContext.js
    //data sent to usercontext
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }

    return(
        <div>
            <h2>Login</h2>
            {/* this is call back after change in state */}
            {/* value = {username} onChange={(e) => setUsername(e.target.value)} */}
            <input type="text" value = {username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            {"     "}
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}