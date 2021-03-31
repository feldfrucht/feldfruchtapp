import React from 'react';
// get our fontawesome imports

const About = ({ description }) => (
    <div className="farmerAbout">
        <p>
        <strong>Über den Hof</strong>,
        {description}
        </p>
    </div>
);

export default About;