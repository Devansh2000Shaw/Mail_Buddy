import React from 'react';
import '../Assets/css/bootstrap.min.css';
import '../Assets/css/flaticon.css';
import '../Assets/css/gijgo.css';
import '../Assets/css/animate.css';
import '../Assets/css/slicknav.css';
import '../Assets/css/style.css';
import Navbar from './Navbar';
import vector from '../Assets/img/banner/edu_ilastration.png';

import { FaUserAlt, FaPhoneAlt, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import Footer1 from './Footer1';

export default function LandingBody(){
    return(
        <div>
            <Navbar></Navbar>
                {/* header-end */}

                {/* <slider_area_start */}
                <div className="slider_area ">
                    <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-6 col-md-6">
                                    <div className="illastrator_png">
                                        <img src={vector} alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6">
                                    <div className="slider_info">
                                        <h3>Welcome to <br/>
                                            MailBuddy <br/>
                                            </h3>
                                        <a href="/Login" className="boxed_btn">
                                        <span>Get Started</span>
                                        <FaArrowRight style={{marginTop: "-7px", marginLeft: "5px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer1></Footer1>
        </div>
    );
}