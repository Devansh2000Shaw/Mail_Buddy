import React from 'react';
import '../Assets/Login.css';
import Navbar from './Navbar';

export default function Login(){
    return(
        <div>
            {/* <Navbar></Navbar> */}
            {/* <div className="col-md-2">
                <a className="scroll logo" href="#wrapper">
                <img src="img/logo/ksc logo white_1.png" id = "conclave-logo" alt="" width = "60" height = "87"/>
                </a>
            </div> */}
            <div className="Form">
                <form>
                    <br/>
                    <p className="login" style={{marginBottom: "20px"}}> LOGIN </p>
                    <label> </label>
                    <input type="text" id="username" placeholder="Username"/> <br/>
                    <input type="password" id="password" placeholder="Password"/> <br/><br/>
                    <a href="/Login/EmailBody" id = "submit">Submit</a><br/><br/>
                    <a href = "/Login/Register" id = "Forgot-Password">Don't have an account?</a>
                </form>
            </div>
        </div>
    );
}