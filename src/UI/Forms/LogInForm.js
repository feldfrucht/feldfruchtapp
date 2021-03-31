import React from 'react';
//import './hero.css';

const LogInForm = () => (
  <form className="impressum-logInForm">
    <label>
        <input type="email" placeholder="Email" name="email"></input>
    </label> 
    <label>
        <input type="password" placeholder="Passwort" name="passwd"></input>
    </label> 
    
    <button type="submit">Anmelden</button>
</form>
);

export default LogInForm;