import React from 'react';
// get our fontawesome imports
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';
import ArrowBack from '../Buttons/ArrowBack';



const Hero = ({ name, image }) => (
        <header className="farmerHero">
            <div className="farmerHero-banner" style={addBackgrdImage(image)}>
                <span className="farmerHero-arrowIcon">
                    <ArrowBack/>
                </span>
            </div>
            <div className="farmerName">
                <div className="farmerName-center">
                    <p>{name}</p>
                    <HeartBtn />
                </div>
            </div>
        </header>
    );

export default Hero;