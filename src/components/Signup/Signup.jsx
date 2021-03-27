import { useState, state, Component } from 'react'
import React from 'react'

class Signup extends Component {

    //const [Signup, setSignup] = useState(false);

    render() {
        return (
            <div   align = "center " id> 
                <h1>SIGN UP</h1><br/>
                <input type="email" id="email" placeholder="Enter Email" /><br/><br/>
                <input type="text" id="username" placeholder="Enter Username" /><br/><br/>
                <input type="number" id="mobilenumber" placeholder="Enter Mobile Number" /><br/><br/>
                <input type="password" id="password" placeholder="Enter Password" /><br/><br/>
                <input style={{ backgroundColor: '#99FF99' }} type="submit" id="submitButton" onClick={() => {this.setState({loggedIn:true});}} value="SIGN UP"/> <br/>
                <sub>Already a member? <a href="#">Click here</a></sub>
            </div>
        )
    }
    
}

export default Signup
