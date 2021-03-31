import React from 'react';
import { Link } from 'react-router-dom';
//import './hero.css';

const SearchBar = () => (
  <section className="searchNav">
    <div className="section-title">
        <p>Entdecken</p>
    </div>
    <div className="searchNav-btnCont">
        <Link to = "/farmerOverview" className="searchNav-choice">
            Erzeuger
        </Link>
        <Link to = "/productShop" className="searchNav-choice">
            Produkte
        </Link>
        <Link to = "/marketOverview" className="searchNav-choice">
            Märkte
        </Link>
    </div>
</section>
  );

export default SearchBar;