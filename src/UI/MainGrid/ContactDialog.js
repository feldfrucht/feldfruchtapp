import React  from 'react';
import ContactForm from '../Forms/ContactForm';
// get our fontawesome imports
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DialogClose from '../Buttons/DialogClose';
//import './hero.css';

const ContactDialog = ({ style, closeDialog, id }) => {

  return( 
    <dialog className="impressum-overlayContact" id={id} style = {style}>
      <div className="impressum-overlayContactContent">
          < DialogClose action={closeDialog}/>
          <p className="impressum-overlayContactTitle">Kontaktformular</p>
          <ContactForm/>
          <p className="impressum-contactFormExclamation">Oder schreib uns auf Social Media!</p>
          <div className="impressum-contactFormSocial">
            <span className="impressum-contactFormIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="impressum-contactFormIcon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="impressum-contactFormIcon">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>
            <span className="impressum-contactFormIcon">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </div>
      </div>
    </dialog>
  );
};

export default ContactDialog;


// const ContactDialog = ({ id }) => {
//   const [openDialog, {closeDialog}, {modalStyle}] = useGenericDialog({id});
//   return( 
//     <dialog className="impressum-overlayContact" id={id} style = {modalStyle}>
//       <div className="impressum-overlayContactContent">
//           < DialogClose action={closeDialog}/>
//           <p className="impressum-overlayContactTitle">Kontaktformular</p>
//           <ContactForm/>
//           <p className="impressum-contactFormExclamation">Oder schreib uns auf Social Media!</p>
//           <div className="impressum-contactFormSocial">
//             <span className="impressum-contactFormIcon">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </span>
//             <span className="impressum-contactFormIcon">
//               <FontAwesomeIcon icon={faInstagram} />
//             </span>
//             <span className="impressum-contactFormIcon">
//               <FontAwesomeIcon icon={faFacebookSquare} />
//             </span>
//             <span className="impressum-contactFormIcon">
//               <FontAwesomeIcon icon={faTwitterSquare} />
//             </span>
//           </div>
//       </div>
//     </dialog>
//   );
// };