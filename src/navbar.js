import React from "react";
import "./App.css";

// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navBarColor">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">
          <img className="logo" src="./images/blue.png" alt="logo" />
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a class="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/Our Properties">Our Properties</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/ConatctUs">Conatct Us</a>
          </li>
          <li>
            <a href="/BookNow">Book Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <Link to='/'>Home</Link>
// <Link to='/about'>About</Link>
// <Link to='/ourProperties'>Our Properties</Link>
// <Link to='/contactUs'>Contact Us</Link>
// <Link to='/bookNow'>Book Now</Link>
