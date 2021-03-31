import React from 'react';

// get our fontawesome imports
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {handleCartUpdate} from '../../Utils/Cart/handleCartUpdate';


const Product = ({ product, setCartProducts }) => {
  const name = product.name;
  const image = product.imageUrl; 
  const price = product.price;
  const unit = product.unit; 
  const amount = product.amount;
  const amountUnit = product.amountUnit;
  const location = product.location;

  const backgrdImage = {
    backgroundImage: "url(" + image + ")"
  }

  const increaseAmount = (prod) => {
    let selectedProd = { ...prod };
    let addAmount = 1;
    selectedProd.amount = addAmount;
    handleCartUpdate(selectedProd, setCartProducts);
  };

  const decreaseAmount = (prod) => {
    let selectedProd = { ...prod };
    let addAmount = -1;
    selectedProd.amount = addAmount;
    handleCartUpdate(selectedProd, setCartProducts);
  };

  return( 
      <li  className="cartDialog-product">
        <div className="cartDialog-productImageContainer" style={backgrdImage} ></div>
        <div  className="cartDialog-productInfo">
            <h1 className="cartDialog-productName">{name}</h1>
            <p className="cartDialog-productLocation">abholen auf {location}</p>
            <p  className="cartDialog-productPrice">{price + " " + unit}</p>
        </div>
        <div  className="cartDialog-productAmount">
          <span className="cartDialog-productAmountBtn" onClick={() => increaseAmount(product)}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <p>{amount + " " + amountUnit}</p>
          <span className="cartDialog-productAmountBtn" onClick={() => decreaseAmount(product)}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
        </div>
      </li>
    );
};

export default Product;