import React from 'react';
import './player8.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player8() {
    const navigate = useNavigate();

    return (
        <div className='player8'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/w-Xe8gLBc5I' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player8-info">
                <p>17M views </p>
                <p>Sacred Games 2 | Official Trailer</p>
                <p> 4 years ago</p>
            </div>
        </div>
    )
}

export default Player8