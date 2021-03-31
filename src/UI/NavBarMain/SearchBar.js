import React, { useState } from 'react';
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownSearch from '../Search/DropDownSearch';

const SearchBar = () => {

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
    <div className="searchbarMain-container">
      <input type="search" id="search" placeholder="Suchen" onFocus={()=>{setClicked(true)}} onBlur={()=>{setClicked(false)}} />
      <span className="searchbarMain-icon">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      < DropDownSearch clicked={clicked} text={dropDownText} />
    </div>
  );
};

export default SearchBar;