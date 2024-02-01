import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

// the following function will make sure that the menu will disappear once a link is clicked

    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

// The following function will change the color of the navbar menu when in mobile view and will also make it scroll down with the content

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrolly >=100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        {/* this is the logo of my webpage and will also link to the homepage */}
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
        {/* the following are the links of the navbar that will redirect to the specific pages of the site, also the if statement on the click will show what menu to show in the mobile view from the css settings */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {/* the following function calls the click function above, if click is true I will show the FaTimes icon (the x) cause the menu is open, otherwhise I will close the menu and show the hamburger function */}
            {click ? ( <FaTimes size={20} style={{color: "#fff"}}  /> ) : (
            <FaBars size={20} style={{color: "#fff"}}  /> )}

        </div>

    </div>
  )
}

export default Navbar