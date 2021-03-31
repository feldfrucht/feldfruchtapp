import React, {useState} from 'react';
import DropDownSearch from '../Search/DropDownSearch';

const LocationFilter = ({width, background, color}) => {

    const [clickedLocation, setClickedLocation] = useState(false);
    const [clickedRadius, setClickedRadius] = useState(false);

    let dropDownText = {
        match0: "bla",
        match1: "bla",
        match2: "bla",
        suggestion0: "bla",
        suggestion1: "bla",
        suggestion2: "bla"
    }
    
    return(
        <div className="locationFilter-wideContainer">
            <div className="locationFilter-container" style={{width:width}}>
                <label className="locationFilter-location" style={{backgroundColor:background}}>
                    <input className={(color === "var(--LightGreen)")?"locationFilter-input locationFilter-lightText": "locationFilter-input"} type="text" placeholder="Alle Orte"  style={{backgroundColor:background}} onFocus={()=>{setClickedLocation(true)}} onBlur={()=>{setClickedLocation(false)}} ></input>
                    < DropDownSearch clicked={clickedLocation} text={dropDownText}  background={background}/>
                </label> 
                
                <div className="locationFilter-radius" style={{backgroundColor:background, color:color, borderLeft: "1px solid " + color}} onMouseLeave={()=>{setClickedRadius(false)}}>
                    <div className="locationFilter-dropdownBtn" onClick={()=>{setClickedRadius(!clickedRadius)}} >
                        <p >Umkreis</p>
                        <p >klein</p>
                    </div>
                    <div className={(clickedRadius)?"locationFilter-dropdownContent":"hide"}>
                        <span className="locationFilter-dropdownText" >klein</span>
                        <span className="locationFilter-dropdownText" >mittel</span>
                        <span className="locationFilter-dropdownText" >groß</span>
                    </div>
                </div>
            </div> 
        </div>
        
    );
};

export default LocationFilter;