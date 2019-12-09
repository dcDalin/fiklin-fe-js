import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About | WIB';
  }, []);
  return <h2>This is the About Section</h2>;
};

export default About;
