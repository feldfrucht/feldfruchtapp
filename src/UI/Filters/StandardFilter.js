import React, {useState} from 'react';
import DropDownSearch from '../Search/DropDownSearch';

const StandardFilter = ({width, placeholderText, background, color}) => {

    const [clicked, setClicked] = useState(false);


    let dropDownText = {
        match0: "bla",
        match1: "bla",
        match2: "bla",
        suggestion0: "bla",
        suggestion1: "bla",
        suggestion2: "bla"
    }
    
    return(
        <div className="standardFilter-wideContainer">
            <label className="standardFilter-container" style={{width:width, backgroundColor:background}}>
                <input  className={(color === "var(--LightGreen)")?"standardFilter-input standardFilter-lightText": "standardFilter-input"} type="text" placeholder={placeholderText} onFocus={()=>{setClicked(true)}} onBlur={()=>{setClicked(false)}} style={{backgroundColor:background}}></input>
                < DropDownSearch clicked={clicked} text={dropDownText} background={background}/>
            </label> 
        </div>
    );
};

export default StandardFilter;