import React from 'react';
import RoundMap from '../Buttons/RoundMap';


const About = ({ city, street, times }) => (
    <div className="marketAbout">
        <h1 className="marketAbout-addressTitle">Adresse:</h1>
        <div className="marketAbout-addressContent">
            <p>{street  + ","}</p>
            <p>{city}</p>
        </div>
        <h1 className="marketAbout-timesTitle">Zeiten:</h1>
        <ul className="marketAbout-timesContent">
            {times.map((time, i) => <li key={i} >{time.day + ", " + time.begin + "-" + time.end + " Uhr"}</li>)}
        </ul>
        <div className="marketAbout-map">
            < RoundMap image="images/map.PNG" />
        </div>
        
    </div>
);

export default About;