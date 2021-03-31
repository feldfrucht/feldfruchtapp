import React, { useState, useEffect } from 'react';
import ContactDialog from './ContactDialog';
import LogInDialog from '../Dialogs/LogInDialog';
//import './hero.css';


function Impressum() {
  // Declare a new state variable
  const [ contactOpen , openContactModal ] = useState(false);
  const [ logInOpen , openLogInModal ] = useState(false);

  const modalStyle = (modalOpen) => {
    if(modalOpen){
      return({display: "block"});
    } else {
      return({display: "none"});
    }
  };

  const closeContactModal = () => {
    openContactModal(false);
  };

  const closeLogInModal = () => {
    openLogInModal(false);
  };

  useEffect(() => {
    const onClickFunction = (event) => {
      if (event.target === document.getElementById("impressum-overlayContactMain")) {
        closeContactModal();
      } else if (event.target === document.getElementById("impressum-overlayLogInMain")) {
        closeLogInModal();
      };
    }

    window.addEventListener("click", onClickFunction);

    return function cleanup() {
      window.removeEventListener('click', onClickFunction);
    };
  },[]);


  return(
    <div className="impressum">
      <div className="impressum-center">
          <button className="impressum-btn" onClick={() => openContactModal(true)}>Kontakt</button>
          < ContactDialog closeDialog = {closeContactModal} style = {modalStyle(contactOpen)} id="impressum-overlayContactMain" />
          <button className="impressum-btn" onClick={() => openLogInModal(true)}>Anmelden</button>
          < LogInDialog  closeDialog = {closeLogInModal} style = {modalStyle(logInOpen)} id="impressum-overlayLogInMain" />
      </div>
    </div>
  );

};

export default Impressum;