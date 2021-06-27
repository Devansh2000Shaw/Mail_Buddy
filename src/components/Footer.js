import React from 'react';
import '../Assets/css/bootstrap.min.css';
import '../Assets/css/flaticon.css';
import '../Assets/css/gijgo.css';
import '../Assets/css/animate.css';
import '../Assets/css/slicknav.css';
import '../Assets/css/style.css';

import { FaUserAlt, FaPhoneAlt, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Footer(){
    return(
        <div>
            <footer className="site-footer" style={{padding: "30px 30px 0px 30px"}}>
                    <div className="site-container">
                    <div className="footer-inner">
                        <div className="footer-info">
                        <div className="footer-info__left">
                            <img src="img/team/Pair programming.gif" alt="about me image" height="200px" width="200px"/>
                            <p>Read more about me</p>
                        </div>
                        <div className="footer-info__right">
                            <h5>Get In Touch</h5>
                            <p className="footer-phone">Phone: +958734902847</p>
                            <p>Email : Jhone@Example.com</p>
                            <div className="social-icons">
                            {/* <a href="#" target="_blank"><img src="img/team/social-pinterest.png" alt="social icon"/></a>
                            <a href="#" target="_blank"><img src="img/team/social-twitter.png" alt="social icon"/></a>
                            <a href="#" target="_blank"><img src="img/team/social-youtube.png" alt="social icon"/></a>
                            <a href="#" target="_blank"><img src="./images/social-twitter.png" alt="social icon"/></a> */}
                            </div>
                        </div>
                        </div>
                        <div className="footer-contact-form">
                        <h5>Contact Form</h5>
                        <form className="contact-form">
                            <div className="contact-form__input">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <textarea></textarea>
                            <input type="submit" name="submit" value="Submit" className="submit-button"/>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <div className="site-container footer-bottom-inner">
                        <p>© 2019 Author | Design by <a href="https://freehtml5.co/" target="_blank">freehtml5.co</a> | All rights Reserved.</p>
                    
                    </div>
                    </div>
                </footer>
        </div>
    );
}