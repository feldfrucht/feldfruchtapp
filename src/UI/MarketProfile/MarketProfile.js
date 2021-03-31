import React from 'react';

import Hero from '../Heroes/Hero';
import About from './About';
import Farmers from '../MainGrid/Farmers';
import Products from '../MainGrid/Products';
import Footer from '../Footers/SmallFooter';
import ImageGrid from '../FarmerProfile/ImageGrid';

import '../../css/marketProfile.css';
import ViewAllBtn from '../Buttons/ViewAllBtn';


const MarketProfile = ({ market, farmers, products }) => {

    return(
        <div className="marketProfile-grid">
            < Hero name={market.name} image={market.imageHeroUrl} />
            < About city={market.city} street={market.street} times={market.marketTimes} />
            < Farmers title="Erzeuger" farmers={farmers} />
            <section>
                < Products title="Produkte" products={products} hideBtn={false} />
                <div className="products-viewAllBackgrd">< ViewAllBtn /></div>
            </section>
            <section className="marketProfile-impressions">
                <p className="section-title">Impressionen</p>
                <div className="marketProfile-imageGrid">
                    < ImageGrid images={market.impressionImages} />
                </div>
            </section>
            < Footer socialLinks={market.socialLinks} />
        </div>
    );
};

export default MarketProfile;