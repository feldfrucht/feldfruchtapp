import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';
import DialogClose from '../Buttons/DialogClose';

const MarketInfo = ({ showMarketInfo, setShowMarketInfo, id, market }) => {

    const closeBtnStyle={
        float:"right",
        marginTop:"0.6rem",
        marginRight:"0.6rem"
    };

  return(
    <article id={id} className={(showMarketInfo)?"marketInfoCart-backgr":"hide"}>
        <div className="marketInfoCart-cart">
            <div className="marketInfoCart-cartImgContainer" style={addBackgrdImage(market.image)}>
                < DialogClose action={()=>{setShowMarketInfo(false)}} style={closeBtnStyle} />
            </div>
            <span className="marketInfoCart-title">
                <h3 className="marketInfoCart-name">{market.name}</h3>
                <HeartBtn /> 
            </span>
            <div className="marketInfoCart-about">
                <h1 className="marketInfoCart-addressTitle">Adresse:</h1>
                <div className="marketInfoCart-addressContent">
                    <p>{market.street  + ","}</p>
                    <p>{market.city}</p>
                </div>
                <h1 className="marketInfoCart-timesTitle">Zeiten:</h1>
                <ul className="marketInfoCart-timesContent">
                    {market.times.map((time, i) => <li key={i} >{time.day + ", " + time.begin + "-" + time.end + " Uhr"}</li>)}
                </ul>
            </div>
            
            <Link to="/marketId" className="marketInfoCart-visitBtn" >besuchen</Link>
        </div>
    </article>
  );
};
  

export default MarketInfo;