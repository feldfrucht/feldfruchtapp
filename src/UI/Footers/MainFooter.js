import React from 'react';
import Impressum from '../MainGrid/Impressum';
import { Link } from 'react-router-dom';


const Footer = () => (
  <footer className="footer">
    < Link to="/marketOverviewMap" >
      < button className="footer-marketsBtn">
        Märkte in Deiner Nähe
      </button>
    </Link>
    <Impressum />
  </footer>
);

export default Footer;