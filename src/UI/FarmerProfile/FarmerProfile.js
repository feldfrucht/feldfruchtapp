import React from 'react';
import Hero from '../Heroes/Hero';
import About from './About';
import ImageGrid from './ImageGrid';
import Products from './Products';
import FarmerMap from './FarmerMap';
import Team from './Team';
import Footer from '../Footers/SmallFooter';

import '../../css/farmerProfile.css';

const FarmerProfile = ({ farmer, products }) => (
    <div className="farmerProfile-grid">
        < Hero name={farmer.name} image={farmer.imageHeroUrl} />
        < About description={farmer.description} />
        < ImageGrid images={farmer.impressionImages} />
        < Products products={products} />
        < FarmerMap />
        < Team team={farmer.team} />
        < Footer socialLinks={farmer.socialLinks} />
    </div>
);

export default FarmerProfile;