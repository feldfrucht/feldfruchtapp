import React from 'react';


const Time = (obj) => {
    return(
        <div className="marketOverview-time">
            < div className="marketOverview-timeDay">
                {obj.obj.day}
            </div>
            <p>{obj.obj.begin + "-" + obj.obj.end + "Uhr"}</p>
        </div>
    );
};

export default Time;