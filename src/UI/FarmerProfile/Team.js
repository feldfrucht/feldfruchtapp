import React from 'react';
import TeamMember from './TeamMember';

const Team = ({team}) => (
    <section className="team">
        <div className="section-title">
            <p>Unser Team</p>
        </div>
        <div >
            <div className="team-scrollable">
                {team.map((member, i) => <TeamMember key={i} name={member.name} />)}
                <div className="empty"></div>
            </div>
        </div>
    </section>
);

export default Team;