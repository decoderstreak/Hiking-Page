import React, { Component } from "react";
import Section5 from './comp/Section5'
import Section6 from './comp/Section6/Section6'
import Section3 from './comp/Section3/Section3'
import Section4 from './comp/Section4/Section4'



export default class Section extends Component {
  render() {
    return (
      <div>
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />

      
      </div>
    );
  }
}