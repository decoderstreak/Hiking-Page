import React, { Component } from "react";
import "./Section3.css";
import Section2_image from "../../assets/images/section3.png";


export default class Section3 extends Component {
  render() {
    return (
      <div className="Section3-maincontainer">
        <div className="Section3-container1">
        <div className="Section3-inner-container">

          <div className="Section3-right-panel">
            {/* Image */}
            <img src={Section2_image} className="Section2-image" />
          </div>
          
          <div className="Section3-left-panel">
            <div className="left-pannel-inner">
            <div className="sec3-text-1">Safe, Affordable, And Trusted</div>
            <div className="sec3-text-2">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
            <div className="sec3-button"> <button className="section3-button">Contact Us</button></div>
            </div>

          </div>
            </div>
          
        </div>
      </div>
    );
  }
}