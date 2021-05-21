import React from 'react';
import Product from '../MainGrid/Product';
import Button from '@material-ui/core/Button';

const Products = ({ products }) => (
    <div className="productsFarmer">
        <div className="productsFarmer-container">
            <div className="productsFarmer-scrollable">
                {products.map((product, i) => <Product image={product.imageUrl} key={i} price={product.price} unit={product.unit} />)}
                <div className="empty">
                </div>
            </div>
        </div>
        <Button variant="contained" color="primary">
            Alle Produkte ansehen
        </Button> 
    </div>    
);

export default Products;