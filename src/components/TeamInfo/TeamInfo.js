import React from 'react';
import femaleImg from '../../Photo/female.png'
import maleImg from '../../Photo/male.png'
import './teamInfo.css'

const TeamInfo = (props) => {
    const {strTeam, intFormedYear, strCountry, strSport, strGender} = props.teamDetail
    
    return (
        <div className = 'container bg-dark teamInfoContainer'>
            <div className='row'>
            <div className='teamInfo col-md-7 com-sm-12 text-center'>
                <h2>{strTeam}</h2>
                <h5>Founded: {intFormedYear} </h5>
                <h5>Country: {strCountry}</h5>
                <h5>Sport Type: {strSport} </h5>
                <h5>Gender: {strGender} </h5>
            </div>
            <div className='teamLogo col-md-5 col-sm-12 text-center'>
                <img src={(Object.strGender !=='male') ? maleImg : femaleImg} alt=""/>
            </div>
            </div>
        </div>
    );
};

export default TeamInfo;