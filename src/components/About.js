import React from 'react';
import Navbar from './Navbar';
import '../Assets/css/bootstrap.min.css';
import '../Assets/css/flaticon.css';
import '../Assets/css/gijgo.css';
import '../Assets/css/animate.css';
import '../Assets/css/slicknav.css';
import '../Assets/css/style.css';
import Devansh from '../Assets/img/about/Devansh.jpg'
import Khushi from '../Assets/img/about/Khushi.jpg'
import Footer1 from './Footer1';

import { FaUserAlt, FaPhoneAlt, FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';



export default function About(){
    return(
        <div>
            <Navbar></Navbar>
        {/* <!-- header-end --> */}

            {/* <!-- bradcam_area_start --> */}
            <div className="bradcam_area breadcam_bg overlay2">
                <h3>About Us</h3>
            </div>
            {/* <!-- bradcam_area_end --> */}

        {/* <!-- about_area_start --> */}
        <div className="about_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="single_about_info">
                            <h3>Who we are?<br/></h3>
                            <p>  We are Students by profession, We are Mern Stack Web Developers, and through this website we have tried to ease the mailing process.</p>
                            <a href="#" className="boxed_btn">Know more about us</a>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="about_tutorials">
                            <div className="courses">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>20+</span>
                                        <p> Sponsors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="courses-blue">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>7638</span>
                                        <p>Users</p>
                                    </div>

                                </div>
                            </div>
                            <div className="courses-sky">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>230+</span>
                                        <p>Collaborators</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- about_area_end --> */}

        {/* <!-- our_team_member_start --> */}
        <div className="our_team_member">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-3">
                        <div className="single_team" style={{height: "500px"}}>
                            <div className="thumb">
                                <img src={Devansh} alt="" style={{height: "600px"}}/>
                                <div className="social_link">
                                    <a href=""><FaTwitter/></a>
                                    <a href="https://www.linkedin.com/in/devansh-shaw-b26a56194/"><FaLinkedin/></a>
                                    <a href="https://github.com/Devansh2000Shaw"><FaGithub/></a>
                                </div>
                            </div>
                            <div className="master_name text-center">
                                <h3 style={{color: "white"}}>Devansh Shaw</h3>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-3">
                        <div className="single_team">
                            <div className="thumb">
                                <img src={Khushi} alt="" style={{height: "600px"}}/>
                                <div className="social_link">
                                    {/* <a href="#"><i className="fa fa-envelope"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a> */}
                                    <a href="#"><FaTwitter/></a>
                                    <a href="https://www.linkedin.com/in/khushi-r-b41326203/"><FaLinkedin/></a>
                                    <a href="https://github.com/KhushiRoy"><FaGithub/></a>
                                </div>
                            </div>
                            <div className="master_name text-center">
                                <h3 style={{color: "white"}}>Khushi Roy</h3>
                                <p>Student</p>
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