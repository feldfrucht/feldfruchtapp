import React from 'react';
// get our fontawesome imports
import DialogClose from '../Buttons/DialogClose';
import LogInForm from '../Forms/LogInForm';

const LogInDialog = ({ style, closeDialog, id }) => {

  return( 
    <dialog className="impressum-overlayLogIn" id={id} style = {style} >
      <div className="impressum-overlayLogInContent">
          < DialogClose action={closeDialog} />
          <p className="impressum-overlayLogInTitle">Anmelden</p> 
          < LogInForm />
          <p className="impressum-logInFormRegister">Noch keinen Account?</p>
          <button className="impressum-registerBtn" type="submit">Hier registrieren</button>

          <p className="impressum-logInFormRegisterFarmer">Erzeuger, aber noch keinen Account?</p>
          <button className="impressum-registerBtn" type="submit">Hier registrieren</button>
      </div>
    </dialog>
  );
};

export default LogInDialog;