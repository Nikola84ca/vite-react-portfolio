import "./FooterStyles.css";
import {FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
            <div>
                <p>1 West King Street</p>
                <p>Bradford</p>
            </div>
        </div>
        <div className="phone">
            <h4><FaPhone size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
            0734024720</h4>
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
            nicola34er@myworkemail.com</h4>
        </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>Born and raised in Italy, I moved to the UK in 2015. I have always been interested in new technologies and IT, as I studied IT in my A levels back in Italy. After 5 years working in content management for a website, I decided to make the step of learning Front-End Development thanks to the edX course, and on my gitHub profile I showcase not only my progress in Front-End Development as a student but also a journey that hopefully will lead to new exciting projects in this field.</p>
            <div className="social">
            <FaFacebook size={30} style={{color: "#fff" , marginRight: "1rem"}}/>
            
            <FaTwitter size={30} style={{color: "#fff" , marginRight: "1rem"}}/>
            
            <FaLinkedin size={30} style={{color: "#fff" , marginRight: "1rem"}}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer