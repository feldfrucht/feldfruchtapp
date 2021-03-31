import React from 'react';
import addBackgrdImage from '../../Utils/addBackgrdImage';

const ProductImage = ({ image }) => {

    return (
        <section className="productImage">
            <div className="productImage-background"></div>
            <div className="productImage-container" style={addBackgrdImage(image)}></div>
        </section>
    );
};

export default ProductImage;