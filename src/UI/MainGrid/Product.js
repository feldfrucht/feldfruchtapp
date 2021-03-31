import React from 'react';
import { Link } from 'react-router-dom';

import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';


const heartButtonStyle = {
    position: "absolute",
    zIndex: "1",
    left: "10.2rem",
    top: "11.1rem"
};

const Product = ({ image, price, unit, id }) => {

  return(
    <article className="product">
        <div className="product-cart">
          <Link  to={`/productInfo/${id}`}> 
              <div className="product-imgContainer" style={addBackgrdImage(image)} ></div>
          </Link>
          <div className="product-tag">
              <h3>{price + " " + unit}</h3>                        
          </div>
          <HeartBtn style = {heartButtonStyle}/>
        </div>
    </article>
  );
};

export default Product;