import React from 'react';
import "./navbar.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="main_nav">
        <div className="logo">
            <h2>
                <span>Muktinath</span>
                <span> Tech</span>
            </h2>
        </div>
        <div className="menu_link">
            <ul>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Sevices</li>
                <li><a href="#"></a>Contact</li>
            </ul>
        </div>
        <div className="social_media">
            <ul className="social_media-desktop">
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaFacebook className="facebook" /></li>
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaInstagram className="instagram" /></li>
                <li><a href="https://www.youtube.com/@muktinathrajbanshi219" target="_blank"></a><FaYoutube className="youtube" /></li>
            </ul>
        </div>
      </nav>
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Muktinath Tech</h1>
      </section>
    </>
  );
};

export default Navbar;
