import React, { Component } from 'react';
import location from '../../assets/icons/location.svg'
import shoe from '../../assets/icons/shoe.svg'
import bag from '../../assets/icons/bag.svg'
import './Section2.css'
export default class Section2 extends Component {
    render() {
        return (
            <div className="Section2-maincontainer">
            <div className="Section2-container1">

                    <div className='section2-card-container'>
                        <div className='section2-card'>
                            <img src={location}></img>
                            <p className='section2-card-heading'>Secret Locations</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                    <div className='section2-card-container'>
                        <div className='section2-card'>
                            <img src={shoe}></img>
                            <p className='section2-card-heading'>Safe Adventure</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                    <div className='section2-card-container'>
                        <div className='section2-card'>
                            <img src={bag}></img>
                            <p className='section2-card-heading'>Professional Hikers</p>
                            <p className='section2-card-text'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
                            <a href='#' className='section2-read'>Read more</a>
                        </div>

                    </div>
                </div>
                <div className='section2-bottom-text'>
                    <p className='section2-bottom-text-1'>Don’t hesitate to contact us to get better Information.</p>
                    <p className='section2-bottom-text-2'>EXPLORE ALL TREKKING.</p>
                </div>

            </div>
        );
    }
}