import React from 'react';
import '../Assets/Email Verified.css';

export default function RegistrationSuccessful(){
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto mt-5">
                        <div class="payment">
                            <div class="payment_header">
                                <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                            </div>
                            <div class="content">
                                <h1>Registration Successful !</h1>
                                <p> An email has been sent to your email. Please verify.</p><br/>
                                <a href="/">Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}