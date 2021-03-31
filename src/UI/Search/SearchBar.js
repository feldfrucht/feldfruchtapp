import React, {useState} from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DropDownSearch from './DropDownSearch';


const SearchBar = ({ text }) => {

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
        <div className="searchbar-searchAndDrop" >
            <div className="searchbar-container"  >
                <input type="search" id="search" placeholder={text} onFocus={()=>{setClicked(true)}} onBlur={()=>{setClicked(false)}}  />
                <span className="searchbar-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                
            </div>
            < DropDownSearch clicked={clicked} text={dropDownText} />
        </div>
        
    );
};

export default SearchBar;