import React from 'react';

import Product from './Product';

const Products = ({ title, products}) => (
  <section className="products">
    <div className="section-title">
        <p>{title}</p>
    </div>
    <div className="products-background"></div>
    <div className="products-scrollable">
      {products.map((product, i) => <Product price={product.price} unit={product.unit} image={product.imageUrl} id={product.id} key={i} />)}
      <div className="empty"></div>
    </div>
  </section>
  
);

export default Products;