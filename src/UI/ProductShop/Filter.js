import React, { useState } from 'react';

const Filter = ({ name, image }) => {

    const [clicked, setClicked] = useState(false);

    const backgrdImage = {
        backgroundImage: "url(" + image + ")"
    }

    return(
        <div className="productShop-filter" onClick={()=>{setClicked(!clicked)}}>
            <div className={(clicked)?"productShop-filterImgContainer productShop-filterImgContainer--activated":"productShop-filterImgContainer"} 
            style={backgrdImage} ></div>
            <div className="productShop-filterName">
                <p>{ name }</p>                        
            </div>
        </div>
    );
};
export default Filter;