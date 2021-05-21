import React from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from '@material-ui/core';

const MoreFiltersBtn = ({filterVisible, setFilterVisible}) => {

    if (!filterVisible) 
        return( 
            <Button variant="contained" color="primary" onClick={() => setFilterVisible(true)}>
                <FontAwesomeIcon icon={faPlus} style={{marginRight: "1rem"}}/>
                Weitere Filter
            </Button> 
        );
    else return(<></>);
};

export default MoreFiltersBtn;