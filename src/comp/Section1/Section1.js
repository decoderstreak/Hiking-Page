import React, { Component } from 'react';
import Section1img from '../../assets/images/section-1.png'
import './Section1.css'
export default class Section2 extends Component {
    render() {
        return (
            <div className="Section1-maincontainer">
               
            <div className="Section1-container1">
                <div className="Section1-left-container">
                    <div className="lc-text-1">Be prepared for the mountains and beyond.</div>
                    <div className="lc-text-2">Are you looking for amazing hiking travel? Don’t worry! We got it for you!</div>
                    <div className="lc-buttons">
                    <button className='lc-button-1'>Contact Us</button>
                    <button className='lc-button-2'>Watch Video</button>
                    </div>
                </div>
                <div className="Section1-right-container">
                    {/* Image container */}
                    <img src={Section1img}></img>
                </div>

                   </div>
                   
            </div>
        );
    }
}