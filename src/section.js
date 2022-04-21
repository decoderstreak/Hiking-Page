import React, { Component } from "react";
import Navbar from './comp/Navbar/Navbar'
import Section1 from './comp/Section1/Section1'
import Section2 from './comp/Section2/Section2'
import Section5 from './comp/Section5'
import Section6 from './comp/Section6/Section6'
import Section3 from './comp/Section3/Section3'
import Section4 from './comp/Section4/Section4'
import Section7 from './comp/Section7/Section7'
import Section8 from './comp/Section8/Section8'
import Section9 from './comp/Section9/Section9'



export default class Section extends Component {
  render() {
    return (
      <div>
          <Navbar />
          {/* <Section1 />
          <Section2 /> */}
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />

      
      </div>
    );
  }
}