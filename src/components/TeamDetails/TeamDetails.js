import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamBanner from '../TeamBanner/TeamBanner';
import TeamDescription from '../TeamDescription/TeamDescription';
import TeamInfo from '../TeamInfo/TeamInfo';

const TeamDetails = () => {
    const {idTeam} = useParams({}) 
    const [teamDetail, setTeamDetail] = useState([])
    useEffect( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then( res => res.json())
        .then( data =>setTeamDetail(data.teams[0]))
    }, [idTeam])
    return (
        <div>
        <TeamBanner teamDetail={teamDetail}></TeamBanner>
        <TeamInfo teamDetail={teamDetail}></TeamInfo>
        <TeamDescription teamDetail={teamDetail}></TeamDescription>
        </div>
    );
};

export default TeamDetails;