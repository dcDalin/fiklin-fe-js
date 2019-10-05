import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Go have FUN | WIB';
  }, []);

  return <h2>This is the home page</h2>;
};

export default Home;
