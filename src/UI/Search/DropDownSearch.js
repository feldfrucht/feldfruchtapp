import React from 'react';
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DropDownSearch = ({clicked, text, background}) => (
    <div className={(clicked)?"searchbar-dropdownContent":"hide"} style={{backgroundColor:background}} >
    <div className="searchbar-suggestions" >
        <span className="searchbar-dropdownTextTop" >{text.match0}</span>
        <span className="searchbar-dropdownTextTop" >{text.match1}</span>
        <span className="searchbar-dropdownTextTop" >{text.match2}</span>
    </div>
    <div className="searchbar-suggestions" >
        <span className="searchbar-iconAndText" > 
        <span ><FontAwesomeIcon icon={faSearch} /></span>
        <span className="searchbar-dropdownTextBottom" >{text.suggestion0}</span>
        </span> 
        <span className="searchbar-iconAndText" > 
        <span ><FontAwesomeIcon icon={faSearch} /></span>
        <span className="searchbar-dropdownTextBottom" >{text.suggestion1}</span>
        </span> 
        <span className="searchbar-iconAndText" > 
        <span ><FontAwesomeIcon icon={faSearch} /></span>
        <span className="searchbar-dropdownTextBottom" >{text.suggestion2}</span>
        </span> 
    </div>
    </div>
);

export default DropDownSearch;