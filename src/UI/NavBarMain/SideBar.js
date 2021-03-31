import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import LogInDialog from '../Dialogs/LogInDialog';

import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideBar = ({ id, style, closeDialog }) => {

  // Declare a new state variable
  const [ logInOpen , openLogInModal ] = useState(false);

  const modalStyle = (modalOpen) => {
    if(modalOpen){
      return({display: "block"});
    } else {
      return({display: "none"});
    }
  };

  const closeLogInModal = () => {
    openLogInModal(false);
  };


  useEffect(() => {
    const onClickFunction = (event) => {
        if (event.target === document.getElementById("sidebar-overlayLogInMain")) {
            openLogInModal(false);
        };
    }

    window.addEventListener("click", onClickFunction);

    return function cleanup() {
      window.removeEventListener('click', onClickFunction);
    };
  },[]);


  return( 
    <dialog className="navbar-overlaySideBar" id={id} style = {style} > 
        <div className="navbar-overlaySideBarContent">
            <button className="navbar-overlayBack" onClick = { closeDialog }>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <ul className="navbar-overlaySideBarList">
                <li>
                    <Link to = "#" className="navbar-overlaySideBarLinks"  onClick={() => openLogInModal(true)}>
                        Anmelden
                    </Link>
                    < LogInDialog  closeDialog = {closeLogInModal} style = {modalStyle(logInOpen)} id="sidebar-overlayLogInMain" />
                </li>
                <li>
                    <Link to = "/" className="navbar-overlaySideBarLinks">Startseite</Link>
                </li>
                <li>
                    <Link to = "/farmerOverview" className="navbar-overlaySideBarLinks">Erzeuger</Link>
                </li>
                <li>
                    <Link to = "/productShop" className="navbar-overlaySideBarLinks">Produkte</Link>
                </li>
                <li>
                    <Link to = "/marketOverview" className="navbar-overlaySideBarLinks">Märkte</Link>
                </li>
                <li>
                    <Link to = "#" className="navbar-overlaySideBarLinks">Über Uns</Link>
                </li>
            </ul>
            <div className="navbar-overlaySideBarSocial">
                <span className="navbar-overlaySideBarIcon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="navbar-overlaySideBarIcon">
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="navbar-overlaySideBarIcon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </span>
                <span className="navbar-overlaySideBarIcon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </span>
            </div>
        </div>
    </dialog>
    );
};

export default SideBar;