import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';
import Time from './Time';

const Market = ({ name, street, city, times, image }) => {

  const heartButtonStyle = {
    paddingRight: "0.6rem",
    paddingBottom: "0.6rem",
    alignSelf: "flex-start"
  };

  return(
    <article className="marketOverview-cart">
        <div  className="marketOverview-cartColumnOne">
            <div className="marketOverview-imgAndLoc">
                <Link to="/marketId"> 
                    <div className="marketOverview-imgContainer" style={addBackgrdImage(image)}>
                        <h3 className="marketOverview-name">{name}</h3>
                    </div>
                </Link>
                <div className="marketOverview-location" >
                    <p>{street + ","}</p>
                    <p>{city}</p>
                </div>
            </div>
            <HeartBtn style={heartButtonStyle} />   
        </div>
        <div className="marketOverview-times">
            {times.map((time, i) => <Time obj={time} key={i} />)}
        </div>  
    </article>
  );
};
  

export default Market;