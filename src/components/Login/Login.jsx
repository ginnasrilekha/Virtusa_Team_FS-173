import React from 'react';
const Login = () => {
    
    return (
        <div align ="center">
            <h1>Login</h1>
            <input type="email" id="email" placeholder="Email" required="email"></input>
           <br/><br/>
           <input type="password" id="password" placeholder="Password" required="password"></input>

           <br/><br/>
            <button style={{backgroundColor:"#99ff99"}} >Login</button>
            <br/><br/>
            <sub>New User?<a href="#">Click here</a></sub>

        </div>
    )
}

export default Login
