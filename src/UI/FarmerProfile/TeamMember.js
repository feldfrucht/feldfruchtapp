import React from 'react';

const TeamMember = ({ name }) => (
    <div className="teamMember">
        <div className="teamMember-imgContainer"></div>
        <div className="teamMember-name">
            <p>{name}</p>                        
        </div>
    </div>
);

export default TeamMember;