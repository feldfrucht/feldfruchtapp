import React, { useState } from 'react';
import Filters from './Filters';

import NavBack from '../Heroes/NavBack';
import Farmer from './Farmer';

import '../../css/farmerOverview.css';

const FarmerOverview = ({farmers, numberItems}) => {
    const [filterVisible, setFilterVisible] = useState(false);
    return(
        <div className="farmerOverview-body">
            < NavBack classNameHero="farmerOverview-hero" numberItems={numberItems} />
            < Filters filterVisible={filterVisible} setFilterVisible={setFilterVisible}/>
            <div className="farmerOverview-gridContainer">
                <span className={(filterVisible)?"farmerOverview-dragBtn":"hide"} onClick={() => setFilterVisible(false)}></span>
                {farmers.map((farmer, i) => <Farmer image={farmer.imageUrl} name={farmer.name} description={farmer.description} key={i} />)}
            </div>
        </div>
    );
};

export default FarmerOverview;