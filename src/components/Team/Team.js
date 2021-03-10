import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team
    return (
        <div className='team'>
            <Card style={{ width: '19rem'}} className='float-left'>
                <div>
                <Card.Img variant="top" src={strTeamBadge} />
                </div>
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        <h5>Sports Type: {strSport}</h5>
                    </Card.Text>
                    <Button onClick={ () => props.handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;