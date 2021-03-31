import React from 'react';
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = ({ socialLinks }) => {

    let social = [];
    for ( const [index, link] of Object.entries(socialLinks) ) {
        if (index === "facebook") {
            social.push(
                <Link to={link} key={index} >
                    <span className="farmerFooter-socialIcon" >
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </span>
                </Link>
            );   
        } else if (index === "instagram"){
            social.push(
                <Link to={link} key={index} >
                    <span className="farmerFooter-socialIcon" >
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </Link>
            );   
        } else if (index === "website"){
            social.push(
                <Link to={link} key={index} >
                    <span className="farmerFooter-socialIcon" >
                        <FontAwesomeIcon icon={faGlobeAfrica} />
                    </span>
                </Link>
            );   
        }; 
    };

    return(
        <div className="farmerFooter"> 
            <div className="farmerFooter-center">
                <p>Besucht uns!</p>
                <div>
                    {social}
                </div>
            </div>
        </div>
    );
};

export default Footer;