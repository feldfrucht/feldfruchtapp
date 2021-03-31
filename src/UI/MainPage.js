import React from 'react';
import MainGrid from './MainGrid/MainGrid';
import Navbar from './NavBarMain/NavBar';
import '../css/main.css';

const MainPage = ({ farmers, products, numberItems }) => (
  <div>
    <Navbar numberItems={numberItems} />
    <MainGrid farmers={farmers} products={products} />
  </div>
);

export default MainPage;