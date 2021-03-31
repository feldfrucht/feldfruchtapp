import React from 'react';
import Product from './Product';

const ProductShopGrid = ({ products }) => (
        <section className="productShop-productsGrid">
            {products.map((product, i) => <Product image={product.imageUrl} isAvailable={product.isAvailable} price={product.price} unit={product.unit} id={product.id} key={i} />)}
        </section>
);

export default ProductShopGrid;