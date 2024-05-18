import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import News from '../../components/News';
import Charts from '../../components/Charts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <News />
      <Charts />
    </div>
  );
};

export default Home;
