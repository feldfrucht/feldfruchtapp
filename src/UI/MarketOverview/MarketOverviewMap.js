import React, { useState } from 'react';

import NavBack from '../Heroes/NavBack';
import FiltersMap from './FiltersMap';
import SearchBar from '../Search/SearchBar';
import ListBtn from '../Buttons/ListBtn';
import OlMap from '../Map/OlMap';

import '../../css/marketOverview.css';


const MarketOverviewMap = ({ markets, numberItems }) => {

    const mapContainer="map";

    const [filterVisible, setFilterVisible] = useState(false);
    const [hideAll, setHideAll] = useState(false);
    
    const [ showMarketInfo , setShowMarketInfo ] = useState(false);
    const [ marketInfo, setMarketInfo ] = useState({
        image:"", name:"", street:"", city:"", times:[
            {day:"", begin:"", end:""}
        ]
    });

    const searchBarStyle ={
        margin: "0 auto"
    }

    return(
        <div className="marketOverviewMap-body">
            < NavBack classNameHero="marketOverview-hero" numberItems={numberItems} />
            <SearchBar text="Märkte suchen" style={searchBarStyle} />
            
            <div id={mapContainer} className="marketOverview-mapContainer"></div>
            < OlMap markets={markets} mapContainer={mapContainer} showMarketInfo={showMarketInfo} setShowMarketInfo={setShowMarketInfo} setMarketInfo={setMarketInfo} marketInfo={marketInfo} setHideFilter={setHideAll} /> 
            
            < FiltersMap hideAll={hideAll} setHideAll={setHideAll} filterVisible={filterVisible} setFilterVisible={setFilterVisible} />
            <span className={(filterVisible)?"farmerOverview-dragBtn":"hide"} onClick={() => setFilterVisible(false)}></span>
            < ListBtn link="/marketOverview" />
            
        </div>
    );
};

export default MarketOverviewMap;