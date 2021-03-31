import React from 'react';
import Farmer from './Farmer';

const Farmers = ({ title, farmers }) => (
  <section className="farmers">
    <div className="section-title">
      <p>{title}</p>
    </div>
    <div className="farmers-scrollable">
      {farmers.map((farmer, i) => <Farmer name={farmer.name} image={farmer.imageUrl} description={farmer.description} key={i} />)}
      <div className="empty"></div>
    </div>
  </section>
);

export default Farmers;