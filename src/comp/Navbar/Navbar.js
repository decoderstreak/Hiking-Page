import React, { Component } from "react";
import logo from "../../assets/icons/logo.svg";
import "./Navbar.css";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar-maincontainer">
        <div className="Navbar-container1">
          <div className="Navbar-left-part">
            <img src={logo}></img>
          </div>
          <div className="Navbar-right-part">
            <div>Location</div>
            <div>Blogs</div>
            <div>Testimonials</div>
            <div>Contact</div>
          </div>
        </div>
 
        <Section1 />
        <Section2 />
    
      </div>
    );
  }
}

export default Navbar;
