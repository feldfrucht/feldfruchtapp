import React from 'react';
import Cart from '../Buttons/CartIcon';
import ArrowBack from '../Buttons/ArrowBack';

const SimpleNav = ({ classNameHero, numberItems }) => {
    const classNameHeader = "navbarBack "+classNameHero;
    return(
        <header className={classNameHeader}>
            <div className="productHero-center">
                <span className="productHero-arrowIcon">
                    <ArrowBack/>
                </span>
                < Cart classNameContainer="productHero-right" numberItems={numberItems} />
            </div>
        </header>   
    );
};

export default SimpleNav;