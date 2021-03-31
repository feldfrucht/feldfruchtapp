import React from 'react';
import { Link } from 'react-router-dom'
// get our fontawesome imports
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from '../Buttons/CartIcon';

const SimpleNav = ({ classNameHero, numberItems }) => {
    const classNameHeader = "navbarBack "+classNameHero;
    return(
        <header className={classNameHeader}>
            <div className="productHero-center">
                <span className="productHero-arrowIcon">
                    <Link to="/"> 
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </span>
                < Cart classNameContainer="productHero-right" numberItems={numberItems} />
            </div>
        </header>   
    );
};

export default SimpleNav;