import React, { useState } from 'react';
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <div className="menu_link mobile_menu_link">
            <ul>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Sevices</li>
                <li><a href="#"></a>Contact</li>
            </ul>
        </div>
        <div className="social_media">
            <ul className="social_media_desktop">
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaFacebookSquare className="facebook" /></li>
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaInstagramSquare className="instagram" /></li>
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaYoutubeSquare className="youtube" /></li>
            </ul>
                {/* humburget menu start */}
            <div className="hamburger_menu">
                  <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                  </a>
            </div>
        </div>

      </nav>
      <section className="hero_section">
        <p>Welcome to</p>
        <h1>Muktinath Tech</h1>
      </section>
    </>
  );
};

export default Navbar;
