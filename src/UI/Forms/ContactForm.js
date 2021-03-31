import React from 'react';
//import './hero.css';

const ContactForm = () => (
  <form className="impressum-contactForm">
    <label>
        <input type="text" placeholder="Name*" name="name"></input>
    </label> 
    <label>
        <input type="email" placeholder="Email*" name="email"></input>
    </label> 
    <textarea name="comment" rows="4" placeholder="Kommentar"></textarea>
        
    <label className="dataConsent">
        <input type="checkbox" value="consent" ></input>
        
        <span>Sie erklären sich 
        damit einverstanden, dass Ihre Daten zum Bearbeiten Ihres Anliegens 
        verwendet werden. Weitere Infos finden Sie in unseren Datenschutzrichtlinien.
        </span>
    </label>
    <button type="submit">Senden</button>
  </form>
);

export default ContactForm;