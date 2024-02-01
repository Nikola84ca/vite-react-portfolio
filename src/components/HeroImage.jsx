import "./HeroImageStyles.css";

import React from 'react'
import IntroImg from "../images/heroimage.jpg"
import {Link} from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt ="laptop and code" />
        </div>
        <div className="content">
            <p>HI, I'M NICOLA AND I'M A</p>
            <h1>Front-End Developer.</h1>
            <div>
                <Link to='/projects' className="btn">Projects
                </Link>
                <Link to='/contact' className="btn btn-light">Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage