import React from 'react';
import './player2.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player2() {
    const navigate = useNavigate();

    return (
        <div className='player2'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/6MzxihE41b8' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player2-info">
                <p>54M views </p>
                <p>Squid Game | Official Trailer</p>
                <p>2 years ago</p>
            </div>
        </div>
    )
}

export default Player2