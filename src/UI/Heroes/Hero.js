import React from 'react';
import { Link } from 'react-router-dom'
// get our fontawesome imports
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const Hero = ({ name, image }) => (
    <header className="farmerHero">
        <div className="farmerHero-banner" style={addBackgrdImage(image)}>
            <span className="farmerHero-arrowIcon">
                <Link to="/"> 
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
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