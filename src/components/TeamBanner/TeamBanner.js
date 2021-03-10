import React from 'react';
import './teamBanner.css'

const TeamBanner = (props) => {
    const {strTeamBadge} = props.teamDetail
    return (
        <div className='teamBanner'>
            <img src={strTeamBadge} class="img-fluid" alt=""/>
        </div>
    );
};

export default TeamBanner;