import React from 'react';
import addBackgrdImage from '../../Utils/addBackgrdImage';


const ImageGrid = ({ images }) => {

    const shownImages = [];
    let counter;
    for (counter = 0; counter < Math.min(4, images.length); counter++) {
        const image = images[counter];
        shownImages.push(<li className="farmerProfile-impressionImage" key={counter} style={addBackgrdImage(image)}></li>);   
    };

    return(
        <ul className="farmerImages-grid">
            {shownImages}
        </ul>
    );
};

export default ImageGrid;