import React  from 'react';
// get our fontawesome imports
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DialogClose = ({ action, style }) => {

  return( 
    <button className="impressum-overlayClose" onClick={action} style={style}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default DialogClose;