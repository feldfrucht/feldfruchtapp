import React, { useCallback } from 'react';

// get our fontawesome imports
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import NavBar from '../NavBarMain/NavBar';
import Product from './Product';
import '../../css/cartDialog.css';
import SwipeableList from '../Lists/SwipeableList';
import SwipeableListItem from '../Lists/SwipeableListItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  checkOutButton: {
    margin: "0 auto",
    background: "var(--LightBlue)"
  },
  buttonText: {
    marginRight: "1rem"
  }
})

const CartDialog = ({ products, numberItems, setCartProducts }) => {

  const classes = useStyles();
  const theme = useTheme();

  let initialValue = 0;
  let totalAmount = Object.values(products).reduce((total, product)=>(total + (Number(product.price)*Number(product.amount))), initialValue);

  const deleteItem = useCallback((prod) => {
    setCartProducts((prevState) => {
      const index = String(prod.id);
      let newState = {...prevState};

      delete newState[index];
      return(newState)
    });
  },[setCartProducts])

  return( 
      <>
        < NavBar  numberItems={numberItems} />
        <div className="cart-center">
          <h1 className="section-title">Einkaufswagen</h1>
          < SwipeableList >
            {Object.values(products).map((product, i) =>
              <SwipeableListItem onSwipe={() => deleteItem(product)} key={i} >
                <Product product={product} key={i} setCartProducts={setCartProducts} />
              </SwipeableListItem>
            )}
          </SwipeableList>
          {/* <ul className="cartDialog-productList">
              {Object.values(products).map((product, i) => <Product product={product} key={i} setCartProducts={setCartProducts} />)}
          </ul> */}
          <p className="cart-totalAmount">Gesamt: <strong className="cart-totalAmountNumber">{totalAmount + "€"}</strong></p>
          <div className="cartDialog-bottom">
            <Button variant="contained" color="primary" className={classes.checkOutButton}>
              zur Kasse
            </Button> 
            <span className="cartDialog-arrowBack">
            <Button variant="text" color={theme.palette.primary.light} className={classes.button} href={"/"}>
              <p className={classes.buttonText}> Weiter schauen</p> <FontAwesomeIcon icon={faArrowLeft} />
            </Button> 
              {/* <p  className="cartDialog-arrowBackText">Weiter schauen</p>
              <Link to="/"> 
                  <FontAwesomeIcon icon={faArrowLeft} />
              </Link> */}
            </span>
          </div>
        </div>
      </>
    );
};

export default CartDialog;