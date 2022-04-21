import React, { Component } from "react";
import "./Section4.css";
import TravelAdvisor from '../../assets/icons/Travel Advisor.svg'
import  UnitedTravel from '../../assets/icons/United Travel.svg'
import TravelChannel from '../../assets/icons/Travel Channel.svg'
import TripRaja from '../../assets/icons/tripraja.svg'
import BookingCom from '../../assets/icons/Booking.svg'
// import Section2_image from "../../assets/images/section6.png";

export default class Section4 extends Component {
  render() {
    return (
      <div className="Section4-maincontainer">
        <div className="Section4-container1">
            <div className="Section4-part-1">
                <div className="Section4-text1">Safe Journey</div>
                <div className="Section4-text2">Trusted by Big Companies</div>
            </div>
        
             <div className="Section4-bottom-container-1">
            <div><img src={TravelAdvisor}></img></div>
            <div><img src={UnitedTravel}></img></div>
           <div> <img src={TravelChannel}></img></div>
            </div>
            
            <div className="Section4-bottom-container-2">
            <img src={TripRaja}></img>
             <img src={BookingCom}></img>
            </div>
       
              
            </div>

          </div>


          
     
          
      
    );
  }
}