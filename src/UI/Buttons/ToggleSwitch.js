import React, { useState } from 'react';

const ToggleSwitch = ({ id, defaultClicked }) => {
    const [clicked, setClicked] = useState(defaultClicked);

    const onChange = ()=>{
        setClicked(!clicked);
    };

    return(
        <div className="toggleSwitch" onClick={setClicked}>
            <input type="checkbox" className="toggleSwitch-checkbox" 
                id={id} defaultChecked={clicked} onChange={onChange}/>
            {id ? (
                <label className="toggleSwitch-label" htmlFor={id}>
                    <span className="toggleSwitch-inner"/>
                    <span className="toggleSwitch-switch"/>
                </label>
            ) : null}
        </div>
    );
};
 
export default ToggleSwitch;