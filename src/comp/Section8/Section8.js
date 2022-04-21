import React, { Component } from "react";
import "./Section8.css";
import email from '../../assets/icons/mail.svg'


export default class Section4 extends Component {
  render() {
    return (
      <div className="Section8-maincontainer">
        <div className="Section8-container1">
            <div className="Section8-heading">Subscribe to Our Newsletter For Weekly Article Update.</div>
            <div className="Section8-text">We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
            <div className="Section8-subscribe-part">
            
            <input type="email" className='Section8-email' placeholder='Enter your Email address'></input>
            <button className='Section8-button'>Subscribe</button>
                
            </div>
            <div className='Section8-mail-icon'><img src={email}></img></div>
           
       
              
            </div>

          </div>


          
     
          
      
    );
  }
}