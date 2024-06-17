import React from 'react';
import './player.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player() {
    const navigate = useNavigate();

    return (
        <div className='player'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/_inKs4eeHiI' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player-info">
                <p>4.4M views</p>
                <p>KUNG FU PANDA 4 | Official Hindi Trailer </p>
                <p>5 months ago </p>
            </div>
        </div>
    )
}

export default Player