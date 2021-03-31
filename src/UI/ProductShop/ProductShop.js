import React, { useState } from 'react';
import ProductShopGrid from './ProductShopGrid';
import Filters from './Filters';

import '../../css/productShop.css';
import NavBack from '../Heroes/NavBack';

const ProductShop = ({ products, numberItems }) => {
    const [filterVisible, setFilterVisible] = useState(false);
    return(
        <div className="productShop-body">
            < NavBack classNameHero="productShop-hero" numberItems={numberItems} />
            < Filters filterVisible={filterVisible} setFilterVisible={setFilterVisible}/>
            <div className="productShop-gridContainer">
                <span className={(filterVisible)?"productShop-dragBtn":"hide"} onClick={() => setFilterVisible(false)}></span>
                < ProductShopGrid products={products} />
            </div>
        </div>
    );
};

export default ProductShop;