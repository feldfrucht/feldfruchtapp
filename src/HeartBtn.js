import React, { useState } from 'react';
import './css/styles.css';
import './heartBtn.css';
// get our fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function HeartBtn(props){
  // Declare a new state variable
  const [liked, activateBtn] = useState(false);

  if (liked) {
    return <button className="heartBtn heartBtn--activated" onClick={() => activateBtn(false)} style = {props.style} >
        <FontAwesomeIcon icon={faHeart} />
    </button>;
  }
  return (
    <button className="heartBtn" onClick={() => activateBtn(true)} style = {props.style} >
        <FontAwesomeIcon icon={faHeart} /> 
    </button>
  );
}

export default HeartBtn;