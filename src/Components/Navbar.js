import React, { useState } from 'react';
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);


  return (
    <>
      <nav className="main_nav">
        <div className="logo">
            <h2>
                <span>M</span>uktinath
                <span>T</span>ech
            </h2>
        </div>
        <div className={showMediaIcons ?  "menu_link mobile_menu_link" : "menu_link"}  >
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Sevice</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className="social_media">
            <ul className="social_media_desktop">
                <li><a href="#"><FaFacebookSquare className="facebook" /></a></li>
                <li><a href="#"><FaInstagramSquare className="instagram" /></a></li>
                <li>
                <a href="https://www.youtube.com/@muktinathrajbanshi219" 
                target="_blank">
                <FaYoutubeSquare className="youtube" />
                </a>
                </li>
            </ul>
                {/* humburget menu start */}
            <div className="hamburger_menu">
                  <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                  </a>
            </div>
        </div>

      </nav>
      {/* <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech</h1>
      </section> */}
    </>
  );
};

export default Navbar;
