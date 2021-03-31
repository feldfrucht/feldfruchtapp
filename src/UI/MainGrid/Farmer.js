import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const Farmer = ({ image, description, name }) => {

  const heartButtonStyle = {
    gridArea: "heart",
    justifySelf: "end"
  };

  return(
    <article className="farmer">
      <div className="farmer-cart">
          <Link to="/farmerId"> 
            <div className="farmer-imgContainer" style={addBackgrdImage(image)} ></div>
          </Link>
          <div className="farmer-descript">
            <HeartBtn style={heartButtonStyle}/>
            <Link className="farmer-name" to="/farmerId">
              <h3>{name}</h3>
            </Link> 
            <p>{description}</p>                     
          </div>
      </div>
    </article>
  );
};
  

export default Farmer;