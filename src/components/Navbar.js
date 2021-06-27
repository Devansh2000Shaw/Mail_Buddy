import React from 'react';
import '../Assets/css/bootstrap.min.css';
import '../Assets/css/flaticon.css';
import '../Assets/css/gijgo.css';
import '../Assets/css/animate.css';
import '../Assets/css/slicknav.css';
import '../Assets/css/style.css';
import Logo from '../Assets/img/about/Logo.png'
import { FaUserAlt, FaPhoneAlt, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaUser, FaArrowRight } from 'react-icons/fa';

export default function Navbar(){
    return(
        <div>
            <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center no-gutters">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo-img">
                                            <a href="index.html">
                                                <img src={Logo} height="80px" width="80px" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a className="active" href="/">Home</a></li>
                                                    <li><a href="/About">About</a></li>
                                                    <li><a href="/Register">Register</a></li>
                                                    <FaUser style={{marginTop: "-7px", marginRight: "5px"}}/>
                                                    <li><a href="/Login">Login</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div className="log_chat_area d-flex align-items-center">
                                            
                                            <div className="live_chat_btn">
                                                <a className="boxed_btn_orange" href="/Login">
                                                    <span>Get Started</span>
                                                    <FaArrowRight style={{marginTop: "-7px", marginRight: "5px", marginLeft: "5px"}}/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <div class="mobile_menu d-block d-lg-none">
                                        <div class="slicknav_menu">
                                            <a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{outline: "none"}}>
                                                <span class="slicknav_menutxt">MENU</span>
                                                <span class="slicknav_icon">
                                                    <span class="slicknav_icon-bar"></span>
                                                    <span class="slicknav_icon-bar"></span>
                                                    <span class="slicknav_icon-bar"></span>
                                                </span>
                                            </a>
                                            <ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: "block"}}>
                                                <li><a class="active" href="/" role="menuitem" tabindex="-1">Home</a></li>
                                            
                                                
                                                <li><a href="/About" role="menuitem" tabindex="-1">About</a></li>
                                            
                                                <li><a href="/Register" role="menuitem" tabindex="-1">Register</a></li>
                                                <i class="flaticon-user"></i>
                                                <li><a href="/Login" role="menuitem" tabindex="-1">Login</a></li>
                                    </ul></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        </div>
    );
}
