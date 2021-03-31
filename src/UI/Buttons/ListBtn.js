import React  from 'react';
// get our fontawesome imports
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const ListBtn = ({ action, link }) => {

  return( 
    < Link to={link} >
      <button className="listMarketsBtn" onClick={action}>
        <FontAwesomeIcon icon={faListAlt} />
      </button>
    </Link>
    
  );
};

export default ListBtn;