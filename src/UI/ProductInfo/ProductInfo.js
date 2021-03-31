import React from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import SimpleNav from '../Heroes/SimpleNav';

import '../../css/productInfo.css';

const ProductInfo = ({product, numberItems, setCartProducts}) => {

    return(
        <div className="productInfo">
            <div className="productInfo-grid">
                < SimpleNav classNameHero="productHero" numberItems={numberItems} />
                < ProductImage image={product.imageUrl}/>
                < ProductDescription  product={product} setCartProducts={setCartProducts} />
            </div>
        </div>
    );
};

export default ProductInfo;