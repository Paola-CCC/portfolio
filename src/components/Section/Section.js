import React from 'react';
import './Section.css';

const Section = ({sectionName ,children}) => (
  <section id={`${sectionName}`}>
    {children}
  </section>
);


export default Section;
