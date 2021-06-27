import React from 'react';
import '../Assets/Register.css';
import Navbar from './Navbar';

export default function Register(){
    return(
        <div>
            {/* <Navbar></Navbar> */}
            <div class="Form">
                <form>
                <p class="login">Register</p><br/>
                <label> </label>
                <input type="text" id="name" placeholder="Full Name"/> <br/>      
                <input type="email" id="username" placeholder="Email"/> <br/>
                <input type="password" id="password" placeholder="Password"/> <br/><br/>
                {/* <input type="submit" id="submit" style = {{marginTop: "15px"}} value="Submit"/><br/> */}
                <a href="/Register/RegistrationSuccessful" id="submit">Submit</a>
                </form>
            </div>
        </div>
    );
}