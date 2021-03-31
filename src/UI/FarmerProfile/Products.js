import React from 'react';
import Product from '../MainGrid/Product';

const Products = ({ products }) => (
    <div className="productsFarmer">
        <div className="productsFarmer-container">
            <div className="productsFarmer-scrollable">
                {products.map((product, i) => <Product image={product.imageUrl} key={i} price={product.price} unit={product.unit} />)}
                <div className="empty">
                </div>
            </div>
        </div>
        <button className="productsFarmer-viewProducts">Alle Produkte ansehen</button>
    </div>    
);

export default Products;