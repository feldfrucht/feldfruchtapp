import React, { useState } from 'react';


const WeekdayBtn = ({dayLetter, theme="light"}) => {

    const [clicked, setClicked] = useState(false);
    
    if (theme==="light"){
        return(
            <div className={(clicked)?"filters-weekdayLight filters-weekdayLight--activated":"filters-weekdayLight"} onClick={() => setClicked(!clicked)}>{dayLetter}</div>
        );
    } else{
        return(
            <div className={(clicked)?"filters-weekdayDark filters-weekdayDark--activated":"filters-weekdayDark"} onClick={() => setClicked(!clicked)}>{dayLetter}</div>
        );
    }
    
};

export default WeekdayBtn;


