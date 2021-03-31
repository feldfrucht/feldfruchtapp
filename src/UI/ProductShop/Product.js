import React from 'react';
import { Link } from 'react-router-dom'
import HeartBtn from '../../HeartBtn';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const Product = ({ isAvailable, price, image, unit, id }) => {

    const heartBtnStyle = {
        zIndex: "1",
        position: "absolute",
        right: "3vw",
        top: "calc(0.1rem + 3vw)",
    };


    return (
        <article className= "productShop-product" >
            <div className={(isAvailable) ? "productShop-productCart" : "productShop-productCart productShop-productCart--notAvailable"}>
                <Link to={`/productInfo/${id}`} >
                    <div className="productShop-productImgContainer" style={addBackgrdImage(image)} ></div>
                </Link>
                <HeartBtn style={heartBtnStyle} />
                <div className="productShop-price">
                    <h3>{price + " " + unit}</h3>                        
                </div>
            </div>
        </article>
    );
};

export default Product;