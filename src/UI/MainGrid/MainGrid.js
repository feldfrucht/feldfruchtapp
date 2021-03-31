import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import Farmers from './Farmers';
import Products from './Products';
import Footer from '../Footers/MainFooter';

const MainGrid = ({ farmers, products }) => (
  <div className="grid">
    <Hero />
    <SearchBar />
    <Farmers title="Erzeuger der Woche" farmers={farmers} />
    <Products products={products} title="Lieblingsprodukte" />
    <Footer />
  </div>
);

export default MainGrid;