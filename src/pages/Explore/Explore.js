import React, { useEffect } from 'react';

const Explore = () => {
  useEffect(() => {
    document.title = 'Explore | WIB';
  }, []);
  return <h2>This is the Explore Section</h2>;
};

export default Explore;
