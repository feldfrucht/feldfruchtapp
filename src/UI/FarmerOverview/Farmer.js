import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const Farmer = ({ name, description, image }) => {

  const heartButtonStyle = {
    position: "absolute",
    top: "0.8rem",
    right: "0.8rem"
  };

  return(
    <article className="farmerOverview-cart">
        <Link to="/farmerId"> 
          <div className="farmerOverview-imgContainer" style={addBackgrdImage(image)}></div>
        </Link>
        <Link to="/farmerId">
            <h3 className="farmerOverview-name">{name}</h3>
          </Link> 
        <div className="farmerOverview-descript">
          <p>{description}</p>  
          <HeartBtn style={heartButtonStyle} />                   
        </div>
    </article>
  );
};
  

export default Farmer;