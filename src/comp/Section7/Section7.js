import React, { Component } from 'react';
import './Section7.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from '../../assets/images/profile image.png'
import star from '../../assets/icons/Star.svg'

export default class Section7 extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1.63,
        slidesToScroll: 1,
        centerMode: true,
      };
    return (
      <div className="section7-main-container"> 
        <div className="section7-inner-container">
        <div className='section7-inner-container-1'>
            <div className='section7-part-1'>
                <div className='section7-part-1-heading'>Happy Hikers</div>
                <div className='section7-part-1-text'>Client’s Say About Us</div>
            </div>
          </div>
          <div className='section7-slide-container'>
          <Slider {...settings}>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card-item'>
             <div>
             <div><img src={image}></img></div>
              <div className='section7-card-name'>Omar Gouse</div>
              <div className='section7-card-status'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
         <div className='section7-star-container'>
         <div className='section7-stars'>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
        
         </div>
         </div>
        </div>

      </div>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card-item'>
             <div>
             <div><img src={image}></img></div>
             <div className='section7-card-name'>Omar Gouse</div>
              <div className='section7-card-status'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
        <div className='section7-star-container'>
         <div className='section7-stars'>
         <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
         </div>
         </div>
        </div>

      </div>
      <div>
        <div className='section7-card-container'>
          <div className='section7-card-item'>
             <div>
             <div><img src={image}></img></div>
             <div className='section7-card-name'>Omar Gouse</div>
              <div className='section7-card-status'>Happy Client</div>
             </div>
              </div>  
        <div className='section7-card-text'>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
        <div className='section7-star-container'>
         <div className='section7-stars'>
         <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
         </div>
         </div>
        </div>

      </div>
    </Slider>
          </div>
        </div>
           </div>
    );
  }
}