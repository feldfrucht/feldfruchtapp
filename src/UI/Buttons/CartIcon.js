import React  from 'react';
import { Link } from 'react-router-dom';
// get our fontawesome imports
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ classNameContainer, numberItems }) => {


  const classNameCart = "cart " + classNameContainer;

  return( 
    <Link to="/cartDialog">
      <div className= {classNameCart}  >
        <span className="cartIcon">
            <FontAwesomeIcon icon={faCashRegister} />
        </span>
        <div className="cartItems">{numberItems}</div>
      </div>
    </Link>
  );
};


export default Cart;