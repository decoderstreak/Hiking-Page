import React, { Component } from "react";
import "./Section5.css";
import Section2_image from "../assets/images/section5.png";


export default class Section5 extends Component {
  render() {
    return (
      <div className="Section5-maincontainer">
        <div className="Section5-container1">
        <div className="Section5-inner-container">

          <div className="Section5-left-panel">
            <div className="left-pannel-inner">
            <div className="sec5-text-1">Enjoy Your Life With Us Now!</div>
            <div className="sec5-text-2">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
            <div className="sec5-button"> <button className="section5-button">Contact Us</button></div>
            </div>

          </div>
          <div className="Section5-right-panel">
            {/* Image */}
            <img src={Section2_image} className="Section2-image" />
          </div>
            </div>
          
        </div>
      </div>
    );
  }
}