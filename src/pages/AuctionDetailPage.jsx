// src/pages/AuctionDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const AuctionDetailPage = () => {
  const { auctionId } = useParams();

  return (
    <div>
      <h1>Auction Details for ID: {auctionId}</h1>
      <p>Here you can view the details of the auction item.</p>
    </div>
  );
};

export default AuctionDetailPage;
