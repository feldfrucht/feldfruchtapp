import React from 'react';
// get our fontawesome imports
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoAndDots = ({ action }) => (
<div className="navbar-left">
  <span className="navbar-logoIcon">
    <FontAwesomeIcon icon={faCarrot} />
  </span>
  <span className="navbar-icon" id="nabar-iconDots" onClick = {action}>
    <FontAwesomeIcon icon={faEllipsisH} />
  </span>
</div>
);

export default LogoAndDots;