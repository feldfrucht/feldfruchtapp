import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MoreFiltersBtn = ({filterVisible, setFilterVisible}) => {

    return(
        <span className={(filterVisible)?"hide":"moreFiltersBtn"} onClick={() => setFilterVisible(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Weitere Filter
        </span>   
    );
};

export default MoreFiltersBtn;