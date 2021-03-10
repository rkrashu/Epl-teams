import React from 'react';

const TeamDescription = (props) => {
    const {strDescriptionEN} = props.teamDetail
    return (
        <div className='container'>
            <p> {strDescriptionEN}</p>
        </div>
    );
};

export default TeamDescription;