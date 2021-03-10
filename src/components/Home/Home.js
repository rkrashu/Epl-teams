import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Team from '../Team/Team';
import './home.css'
import Header from '../Header/Header';
const Home = () => {
    const [teams, setTeams] = useState([])
    const history = useHistory()
    const handleClick = (idTeam) =>{
    const url = `/team/${idTeam}`
    history.push(url)
    }
    useEffect( () =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then (res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className= 'home'>
            <div>
                <Header></Header>
            </div>
            <div className='team-container'>
            {
                teams.map(team => <Team team={team} key={team.idTeam} handleClick={handleClick}></Team>)
            }
            </div>
        </div>
    );
};

export default Home;