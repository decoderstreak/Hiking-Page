import React, { Component } from "react";
import "./Section6.css";
import Section2_image from "../../assets/images/section6.png";


export default class Section5 extends Component {
  render() {
    return (
      <div className="Section6-maincontainer">
        <div className="Section6-container1">
        <div className="Section6-inner-container">

          <div className="Section6-right-panel">
            {/* Image */}
            <img src={Section2_image} className="Section2-image" />
          </div>
          
          <div className="Section6-left-panel">
            <div className="left-pannel-inner">
            <div className="sec5-text-1">Let’s Enjoy Nature With Us</div>
            <div className="sec5-text-2">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
            <div className="sec5-button"> <button className="section5-button">Learn More</button></div>
            </div>

          </div>
            </div>
          
        </div>
      </div>
    );
  }
}