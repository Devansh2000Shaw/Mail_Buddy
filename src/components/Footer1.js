import React from 'react';
import '../Assets/css/style.css';
import { FaUserAlt, FaPhoneAlt, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Footer1(){
    return(
        <div>
            {/* <!-- footer --> */}
                <footer class="footer footer_bg_1">
                    <div class="footer_top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-4 col-md-6 col-lg-4">
                                    <div class="footer_widget">
                                        <h3 class="footer_title" style={{color: "#EE71F9"}}>
                                            About Us
                                        </h3>
                                        <p>
                                        We are Students by profession, We are Mern Stack Web Developers, and through this website we have tried to ease the mailing process.
                                        </p>
                                        <div class="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <FaLinkedin style={{fontSize: "25px", marginTop: "-5px"}}/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <FaYoutube style={{fontSize: "25px", marginTop: "-5px"}}/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <FaInstagram style={{fontSize: "25px", marginTop: "-5px"}}/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <FaFacebook style={{fontSize: "25px", marginTop: "-5px"}}/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-xl-3 col-md-6 col-lg-3">
                                    <div class="footer_widget">
                                        <h3 class="footer_title" style={{color: "#EE71F9"}}>
                                            Address
                                        </h3>
                                        <p>
                                            48/D Satachai Para Trunk ROad Delhi <br/>
                                            +10 367 467 8934 <br/>
                                            contact@contact.com
                                        </p>
                                    </div>
                                </div>
                                <div id="contact" class="contact-us section">
                                <div class="container">
                                <div class="row"></div>
                                <div class="col-lg-12 wow animate__animated animate__fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s" style={{marginTop: "20px"}}>
                                    <form id="contact" action="" method="post">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <fieldset>
                                                <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required/>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-6">
                                                <fieldset>
                                                <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required/>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12">
                                                <fieldset>
                                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12">
                                                <fieldset>
                                                <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                                                </fieldset>
                                            </div>
                                            <div class="col-lg-12">
                                                <fieldset>
                                                <button type="submit" id="form-submit" class="main-button ">Send Message</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div class="contact-dec">
                                            <img src="assets/images/contact-decoration.png" alt=""/>
                                        </div>
                                    </form>
                                </div>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="copy-right_text">
                        <div class="container">
                            <div class="footer_border"></div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <p class="copy_right text-center">
                                        Copyright &copy;2021 All rights reserved | This website is made with ❤️
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    );
}