// src/pages/HomePage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Auction System</h1>
      <p>This is the homepage. You can browse auctions here.</p>
      
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src=" " alt="Auction 1" />
          <p className="legend">Auction 1</p>
        </div>
        <div>
          <img src=" " alt="Auction 2" />
          <p className="legend">Auction 2</p>
        </div>
        <div>
          <img src=" " alt="Auction 3" />
          <p className="legend">Auction 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
