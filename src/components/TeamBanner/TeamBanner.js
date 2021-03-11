import React from 'react';
import './teamBanner.css'

const TeamBanner = (props) => {
    const {strTeamBadge, strStadiumThumb} = props.teamDetail
    console.log(props.teamDetail)
    return (
        <div className='teamBanner' style={{backgroundImage: `url(${strStadiumThumb})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <img src={strTeamBadge} class="img-fluid" alt=""/>
        </div>
    );
};

export default TeamBanner;