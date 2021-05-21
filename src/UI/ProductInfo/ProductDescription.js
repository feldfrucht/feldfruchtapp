import React from 'react';
import HeartBtn from '../../HeartBtn';
import {handleCartUpdate} from '../../Utils/Cart/handleCartUpdate';
import Button from '@material-ui/core/Button';


const ProductDescription = ({ product, setCartProducts }) => {

    const name=product.name ;
    const description=product.description;
    const price=product.price;
    const unit=product.unit;
    const amountUnit = product.amountUnit;

    let selectedAmount = 0;
    
    const handleInput = (e) => {
        selectedAmount = e.target.value;
    };

    const buy = (prod, amount) => {
        let selectedProduct = { ...prod };
        selectedProduct.amount = amount;
        handleCartUpdate(selectedProduct, setCartProducts);
    };

    return (
        <section className="productDescription">
            <div className="productName">
                <div className="productName-center">
                    <p>{name}</p>
                    <HeartBtn />
                </div>
            </div>
            <div className="productAbout">
                <div className="productAbout-info">
                    <p className="productAbout-text">{description}</p>
                    <p className="productAbout-price">{price+ " " + unit}</p>        
                </div>
                
                <div className="productAbout-circles">
                    <div className="productAbout-farmer"></div>
                    <div className="productAbout-map"></div>        
                </div>

                <label className="productAbout-selectAmount">
                    <input type="number" placeholder="gewünschte Menge" name="selectedAmount" onChange={handleInput}></input>
                    {amountUnit}
                </label> 
                <Button className="productAbout-buyBtn" variant="contained" color="primary" onClick={()=>buy(product, selectedAmount)}>
                    zum Warenkorb hinzufügen
                </Button>  
                <Button variant="contained" color="primary" className="productAbout-saveBtn">
                    zur Einkaufsliste hinzufügen
                </Button> 
            </div>
        </section>
    );
}

export default ProductDescription;