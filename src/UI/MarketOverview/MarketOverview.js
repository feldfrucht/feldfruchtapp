import React, { useState } from 'react';

import NavBack from '../Heroes/NavBack';
import Market from './Market';
import Filters from './Filters';

import '../../css/marketOverview.css';


const MarketOverview = ({ markets, numberItems }) => {

    const [filterVisible, setFilterVisible] = useState(false);

    return(
        <div className="marketOverview-body">
            < NavBack classNameHero="marketOverview-hero" numberItems={numberItems} />
            < Filters filterVisible={filterVisible} setFilterVisible={setFilterVisible}/>
            <div className="marketOverview-gridContainer">
                <span className={(filterVisible)?"farmerOverview-dragBtn":"hide"} onClick={() => setFilterVisible(false)}></span>
                {markets.map((market, i) => <Market image={market.imageUrl} name={market.name} street={market.street} city={market.city} times={market.marketTimes} key={i} />)}
            </div>
        </div>
    );
};

export default MarketOverview;